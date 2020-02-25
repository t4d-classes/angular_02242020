import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CarTableComponent } from './components/car-table/car-table.component';
import { CarViewRowComponent } from './components/car-view-row/car-view-row.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarHomeComponent } from './components/car-home/car-home.component';

@NgModule({
  declarations: [CarTableComponent, CarViewRowComponent, CarFormComponent, CarHomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [CarHomeComponent],
})
export class CarToolModule { }
