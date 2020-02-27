import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

import { Car } from '../../models/car';

const ALL_CARS_QUERY = gql`
query AllCars {
  cars {
    id
    make
    model
    year
    color
    price
  }
  editCarId @client
}`;

const APPEND_CAR_MUTATION = gql`
  mutation AppendCar($car: AppendCar) {
    appendCar(car: $car) {
      id
      make
      model
      year
      color
      price
    }
  }
`;

const DELETE_CAR_MUTATION = gql`
  mutation DeleteCar($carId: ID) {
    deleteCar(carId: $carId) {
      id
      make
      model
      year
      color
      price
    }
  }
`;

const REPLACE_CAR_MUTATION = gql`
  mutation ReplaceCar($car: ReplaceCar) {
    replaceCar(car: $car) {
      id
      make
      model
      year
      color
      price
    }
  }
`;

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  loading = true;
  error: any;

  cars: Car[] = [];

  editCarId = -1;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: ALL_CARS_QUERY,
      })
      .valueChanges.subscribe(result => {

        if (result.data) {
          const data = result.data as { cars: Car[], editCarId: number };
          this.cars = data.cars;
          this.editCarId = data.editCarId;
        }

        this.loading = result.loading;
        this.error = result.errors;
      });
  }

  doAppendCar(car: Car) {

    this.apollo.mutate({
      mutation: APPEND_CAR_MUTATION,
      variables: { car },
      refetchQueries: [ { query: ALL_CARS_QUERY } ],
    }).subscribe(() => {
      this.apollo.getClient().writeData({
        data: { editCarId: -1 },
      });
    });

  }

  doRemoveCar(carId: number) {

    this.apollo.mutate({
      mutation: DELETE_CAR_MUTATION,
      variables: { carId },
      refetchQueries: [ { query: ALL_CARS_QUERY } ],
    }).subscribe(() => {
      this.apollo.getClient().writeData({
        data: { editCarId: -1 },
      });
    });

  }

  doReplaceCar(car: Car) {

    this.apollo.mutate({
      mutation: REPLACE_CAR_MUTATION,
      variables: { car },
      refetchQueries: [ { query: ALL_CARS_QUERY } ],
    }).subscribe(() => {
      this.apollo.getClient().writeData({
        data: { editCarId: -1 },
      });
    });

  }

  doEditCar(carId: number) {
    this.apollo.getClient().writeData({
      data: { editCarId: carId },
    });
  }

  doCancelCar() {
    this.apollo.getClient().writeData({
      data: { editCarId: -1 },
    });
  }

}
