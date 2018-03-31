import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { JournalistComponent } from './journalist/journalist.component'
@NgModule({
  declarations: [
    AppComponent,
    JournalistComponent

  ],
  imports: [
    BrowserModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
