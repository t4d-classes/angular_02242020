import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private sortColName = '';

  constructor(private httpClient: HttpClient) { }

  setSortColName(sortColName: string) {
    this.sortColName = sortColName;
  }

  all() {
    if (this.sortColName.length > 0) {
      return this.httpClient
        .get<Car[]>('http://localhost:4250/cars?_sort=' + this.sortColName)
        .toPromise();
    } else {
      return this.httpClient
        .get<Car[]>('http://localhost:4250/cars')
        .toPromise();
    }
  }

  append(car: Car) {
    return this.httpClient.post<Car>('http://localhost:4250/cars', car).toPromise();
  }

  replace(car: Car) {
    return this.httpClient
      .put<Car>('http://localhost:4250/cars/' + car.id, car)
      .toPromise();
  }

  remove(carId: number) {
    return this.httpClient
      .delete<void>('http://localhost:4250/cars/' + carId)
      .toPromise();
  }
}
