import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Car } from '../../models/car';

@Component({
  selector: '.app-car-edit-row',
  templateUrl: './car-edit-row.component.html',
  styleUrls: ['./car-edit-row.component.css']
})
export class CarEditRowComponent implements OnInit {

  @Input()
  car: Car;

  @Output()
  saveCar = new EventEmitter<Car>();

  @Output()
  cancelCar = new EventEmitter<void>();

  editCarForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.editCarForm = this.fb.group({
      make: this.car.make,
      model: this.car.model,
      year: this.car.year,
      color: this.car.color,
      price: this.car.price,
    });
  }

  doSave() {
    this.saveCar.emit({
      ...this.editCarForm.value,
      id: this.car.id,
    });
  }

  doCancel() {
    this.cancelCar.emit();
  }

}
