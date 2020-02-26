import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trackby-demo',
  templateUrl: './trackby-demo.component.html',
  styleUrls: ['./trackby-demo.component.css']
})
export class TrackbyDemoComponent implements OnInit {

  colors = [
    { id: 1, name: 'red' },
    { id: 2, name: 'green' },
    { id: 3, name: 'blue' },
  ];

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      console.log('noah rocks!');
      this.colors = [
        { id: 1, name: 'red' },
        { id: 2, name: 'green' },
        { id: 3, name: 'blue' },
      ];
    }, 10000);


  }

  colorKey(color: { id: number, name: string }) {

    return color.name;

  }

}
