import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ColorHomeComponent } from './components/color-home/color-home.component';

@NgModule({
  declarations: [ColorHomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [ ColorHomeComponent ],
})
export class ColorToolModule { }
