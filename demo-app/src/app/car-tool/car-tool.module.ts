import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

import { CarTableComponent } from './components/car-table/car-table.component';
import { CarViewRowComponent } from './components/car-view-row/car-view-row.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarEditRowComponent } from './components/car-edit-row/car-edit-row.component';

@NgModule({
  declarations: [
    CarTableComponent, CarViewRowComponent, CarFormComponent,
    CarHomeComponent, CarEditRowComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [CarHomeComponent],
})
export class CarToolModule { }
