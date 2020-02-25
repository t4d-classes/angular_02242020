import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input()
  cars: Car[] = [];

  @Input()
  editCarId = -1;

  @Output()
  sortCars = new EventEmitter<string>();

  @Output()
  editCar = new EventEmitter<number>();

  @Output()
  deleteCar = new EventEmitter<number>();

  @Output()
  saveCar = new EventEmitter<Car>();

  @Output()
  cancelCar = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  doSort(colName: string) {
    this.sortCars.emit(colName);
  }

}
