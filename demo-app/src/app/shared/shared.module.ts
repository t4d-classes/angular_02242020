import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { TypeaheadDemoComponent } from './components/typeahead-demo/typeahead-demo.component';



@NgModule({
  declarations: [ToolHeaderComponent, TypeaheadDemoComponent],
  imports: [
    CommonModule, ReactiveFormsModule, HttpClientModule,
  ],
  exports: [ToolHeaderComponent, TypeaheadDemoComponent],
})
export class SharedModule { }
