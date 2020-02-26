import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import { Observable, of } from 'rxjs';
// import { map, filter, take, pluck } from 'rxjs/operators';

// const cars = [
//   {
//     "id": 1,
//     "make": "Ford",
//     "model": "Fusion Hybrid",
//     "year": 2019,
//     "color": "blue",
//     "price": 45000
//   },
//   {
//     "id": 2,
//     "make": "Tesla",
//     "model": "S",
//     "year": 2018,
//     "color": "red",
//     "price": 100000
//   },
//   {
//     "make": "Telsa",
//     "model": "S",
//     "year": 2020,
//     "color": "red",
//     "price": 5000,
//     "id": 3
//   },
//   {
//     "make": "Mercedes",
//     "model": "350",
//     "year": 2019,
//     "color": "red",
//     "price": 55000,
//     "id": 4
//   }
// ];

// of(...cars).pipe(
//   pluck('make')
// ).subscribe(carInfo => console.log(carInfo));



// const o = new Observable<number>(subscriber => {

//   let counter = 0;

//   const h = setInterval(() => {

//     if (subscriber.closed) {
//       clearInterval(h);
//       return;
//     }

//     // console.log('source: ', counter);
//     subscriber.next(counter++);

//   }, 500);

//   setTimeout(() => {

//     clearInterval(h);
//     // subscriber.complete();
//     subscriber.error('something went wrong...');
    
//   }, 10000);


// });

// const ops = [
//   map( (num: number) => num * 2 ),
//   filter( num => num > 4),
//   take(3),
// ];

// const subscription = o.pipe(...ops as []).subscribe({
//   next: num => console.log(num),
//   error: err => console.log(err),
//   complete: () => console.log('all done'),
// });

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 3000);


// o.subscribe(num => console.log('observable 0: ', num));
// o.subscribe(num => console.log('observable 1: ', num));

// const p = new Promise(resolve => {

//   const resolverId = pCounter++;

//   console.log(`calling function passed to Promise (${resolverId}) constructor`);

//   setTimeout(() => {
//     resolve(0);
//   }, 1000);

// });

// p.then(num => console.log('promise 0: ', num));
// p.then(num => console.log('promise 1: ', num));
