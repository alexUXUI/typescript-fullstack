///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {bootstrap} from 'angular2/platform/browser';

import {AppComponent} from "./app.component";
import {HomeComponent} from "./home.component";

bootstrap(AppComponent);
// bootstrap(HomeComponent);
//
// @NgModule({
//   imports: [
//     BrowserModule,
//     FormsModule
//   ],
//   declarations: [
//     AppComponent,
//     HeroDetailComponent
//   ],
//   bootstrap: [ AppComponent ]
// })
// export class AppModule { }
