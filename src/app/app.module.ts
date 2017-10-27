import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, Form } from '@angular/forms';

//font-awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

//Service
import {ProductService} from './products/product.service';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , AngularFontAwesomeModule
    , FormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
