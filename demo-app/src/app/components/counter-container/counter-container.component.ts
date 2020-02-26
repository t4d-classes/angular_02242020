import { Component, OnInit, ViewChild, AfterViewInit, NgZone } from '@angular/core';

import { CounterDisplayComponent } from '../counter-display/counter-display.component';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
  styleUrls: ['./counter-container.component.css']
})
export class CounterContainerComponent implements
  OnInit {
  // AfterViewInit {

  counter = 0;

  // @ViewChild(CounterDisplayComponent)
  // counterDisplay: CounterDisplayComponent;

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    setInterval(() => {
      console.log(this.counter);
      this.counter = this.counter + 1;
    }, 700);
  }

  // ngAfterViewInit(): void {

  //   let counter = 0;

  //   this.zone.runOutsideAngular(() => {
  //     setInterval(() => {
  //       console.log(counter);
  //       // this.counter = this.counter + 1;
  //       this.counterDisplay.counter = counter++;
  //     }, 722);

  //     setInterval(() => {
      
  //       this.zone.run(() => {});
  //     }, 2000);
  //   });


  // }

}
