import { Component, OnInit } from '@angular/core';

import { Car } from '../../models/car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [];

  editCarId = -1;

  constructor(private carsSvc: CarsService) { }

  ngOnInit(): void {
    this.cars = this.carsSvc.all();
  }

  doAppendCar(car: Car) {
    this.cars = this.carsSvc.append(car).all();
    this.editCarId = -1;
  }

  doRemoveCar(carId: number) {
    this.cars = this.carsSvc.remove(carId).all();
    this.editCarId = -1;
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doReplaceCar(car: Car) {
    this.cars = this.carsSvc.replace(car).all();
    this.editCarId = -1;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

}
