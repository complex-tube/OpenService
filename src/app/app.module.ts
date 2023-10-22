import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {categoriesReducer} from "./core/reducers/categories.reducer";
import {productsReducer} from "./core/reducers/products.reducer";
import {cartReducer} from "./core/reducers/cart.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({
      categoriesState: categoriesReducer,
      productsState: productsReducer,
      cartState: cartReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
