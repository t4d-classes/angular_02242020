import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  sortColName = '';

  @Input()
  cars: Car[] = [];

  @Input()
  editCarId = -1;

  get sortedCars() {
    if (this.sortColName.length > 0) {

      return this.cars.concat().sort((a: Car, b: Car) => {

        const aValue = String(a[this.sortColName]).toUpperCase();
        const bValue = String(b[this.sortColName]).toUpperCase();

        if (aValue < bValue) {
          return -1;
        } else if (aValue > bValue) {
          return 1;
        } else {
          return 0;
        }

      });

    } else {
      return this.cars;
    }
  }

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
    this.sortColName = colName;
  }

}
