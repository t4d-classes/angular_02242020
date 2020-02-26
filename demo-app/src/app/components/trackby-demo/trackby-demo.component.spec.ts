import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackbyDemoComponent } from './trackby-demo.component';

describe('TrackbyDemoComponent', () => {
  let component: TrackbyDemoComponent;
  let fixture: ComponentFixture<TrackbyDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackbyDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackbyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
