import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BaseModule } from './base/base.module';
import { AppRoutingModule } from './app-routing.module';

import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [BaseComponent]
})
export class AppModule { }
