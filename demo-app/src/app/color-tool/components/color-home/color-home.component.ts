import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  headerText = 'Color Tool';

  colors = ['purple', 'lilac', 'fuschia', 'red'];


  constructor() { }

  ngOnInit(): void {
  }

  doAddColor(color: string) {
    this.colors = this.colors.concat(color);
  }

}
