import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ColorToolModule } from './color-tool/color-tool.module';
import { CarToolModule } from './car-tool/car-tool.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CounterContainerComponent } from './components/counter-container/counter-container.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';
import { TrackbyDemoComponent } from './components/trackby-demo/trackby-demo.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterContainerComponent,
    CounterDisplayComponent,
    TrackbyDemoComponent,
    PageLayoutComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule, ColorToolModule,
    CarToolModule, SharedModule,
    ReactiveFormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
