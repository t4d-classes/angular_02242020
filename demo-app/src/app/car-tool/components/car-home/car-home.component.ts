import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

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

  sortColName = '';

  updateCars = {
    next: cars => {
      this.cars = cars;
      this.editCarId = -1;
    },
    error: err => {
      console.log(err);
    },
  };

  constructor(public carsSvc: CarsService) { }

  ngOnInit(): void {
    this.refreshCars();
  }

  doSortCars(sortColName: string) {
    this.sortColName = sortColName;
    this.refreshCars();
  }

  refreshCars(o: Observable<any> = null) {
    (!o ? of([]) : o).pipe(switchMap(() => this.carsSvc.all(this.sortColName)))
      .subscribe(this.updateCars);
  }

  doAppendCar(car: Car) {
    this.refreshCars(this.carsSvc.append(car));
  }

  doRemoveCar(carId: number) {
    this.refreshCars(this.carsSvc.remove(carId));
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doReplaceCar(car: Car) {
    this.refreshCars(this.carsSvc.replace(car));
  }

  doCancelCar() {
    this.editCarId = -1;
  }

}
