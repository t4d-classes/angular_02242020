import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarToolModule } from './car-tool/car-tool.module';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CarToolModule, GraphQLModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
