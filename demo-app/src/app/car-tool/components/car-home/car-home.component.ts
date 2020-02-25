import { Component, OnInit, DoCheck } from '@angular/core';

import { Car } from '../../models/car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit, DoCheck {

  cars: Car[] = [];

  editCarId = -1;

  constructor(public carsSvc: CarsService) { }

  ngOnInit(): void {
    this.carsSvc.all().then(cars => {
      this.cars = cars;
    });
  }

  ngDoCheck() {
    console.log('do check');
  }

  doSortCars(sortColName: string) {
    this.carsSvc.setSortColName(sortColName);
    this.refreshCars();
  }


  refreshCars() {
    return this.carsSvc.all().then(cars => {
      this.cars = cars;
    });
  }

  doAppendCar(car: Car) {
    this.carsSvc
      .append(car)
      .then(() => this.refreshCars());
    this.editCarId = -1;
  }

  doRemoveCar(carId: number) {
    this.carsSvc
      .remove(carId)
      .then(() => this.refreshCars());
    this.editCarId = -1;
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doReplaceCar(car: Car) {
    this.carsSvc
      .replace(car)
      .then(() => this.refreshCars());
    this.editCarId = -1;
  }

  doCancelCar() {
    this.editCarId = -1;
  }

}
