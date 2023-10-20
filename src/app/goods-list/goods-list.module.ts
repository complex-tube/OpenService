import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsListRoutingModule } from './goods-list-routing.module';
import { GoodsListComponent } from './goods-list.component';


@NgModule({
  declarations: [
    GoodsListComponent
  ],
  imports: [
    CommonModule,
    GoodsListRoutingModule
  ]
})
export class GoodsListModule { }
