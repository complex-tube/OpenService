import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ProductsComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class ProductsModule { }
