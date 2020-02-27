import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
// import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

import { SharedModule } from '../shared/shared.module';

import { CarTableComponent } from './components/car-table/car-table.component';
import { CarViewRowComponent } from './components/car-view-row/car-view-row.component';
import { CarEditRowComponent } from './components/car-edit-row/car-edit-row.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarHomeComponent } from './components/car-home/car-home.component';

@NgModule({
  declarations: [
    CarTableComponent,
    CarViewRowComponent,
    CarFormComponent,
    CarHomeComponent,
    CarEditRowComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // HttpClientModule,
    // ApolloModule,
    // HttpLinkModule,
    SharedModule,
  ],
  exports: [CarHomeComponent],
  // providers: [{
  //   provide: APOLLO_OPTIONS,
  //   useFactory: (httpLink: HttpLink) => {
  //     return {
  //       cache: new InMemoryCache(),
  //       link: httpLink.create({
  //         uri: 'http://localhost:3030'
  //       })
  //     };
  //   },
  //   deps: [HttpLink]
  // }],
})
export class CarToolModule { }
