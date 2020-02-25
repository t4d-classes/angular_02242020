import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/car';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'blue', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2018, color: 'red', price: 100000 },
  ];

  editCarId = -1;

  constructor() { }

  ngOnInit(): void {
  }

  doAppendCar(car: Car) {
    this.cars = this.cars.concat({
      ...car,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });
  }

  doRemoveCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

}
