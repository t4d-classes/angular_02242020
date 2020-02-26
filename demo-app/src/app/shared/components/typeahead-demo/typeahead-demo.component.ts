import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { switchMap, map, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface Color {
  id: number;
  name: string;
}

@Component({
  selector: 'app-typeahead-demo',
  templateUrl: './typeahead-demo.component.html',
  styleUrls: ['./typeahead-demo.component.css']
})
export class TypeaheadDemoComponent implements OnInit {

  colorSearchInput = new FormControl('');

  colorInput$ = new BehaviorSubject<string[]>([]);

  colorResults$ = this.colorInput$.pipe(
    debounceTime(500),
    switchMap(colorName => this.httpClient
      .get<Color[]>('http://localhost:4250/colors?name_like=' + colorName)),
    map(colors => colors.map(color => color.name)),
  );

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  doColorSearch() {
      this.colorInput$.next(this.colorSearchInput.value);
  }

}
