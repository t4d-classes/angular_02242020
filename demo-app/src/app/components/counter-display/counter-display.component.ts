import {
  Component, OnInit, Input, DoCheck,
  OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements
  OnInit,
  // DoCheck {
  OnChanges {

  @Input()
  counter = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.changeDetectorRef.detach();

    setInterval(() => {
      this.changeDetectorRef.detectChanges();
    }, 1000);
  }

  // ngDoCheck() {
  //   console.log('running change detection');
  // }

  ngOnChanges(changes: SimpleChanges) {

    console.log('simple changes: ', changes);
  }

}
