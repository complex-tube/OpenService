import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoriesListComponent } from './layouts/categories-list/categories-list.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    HeaderComponent,
    CategoriesListComponent
  ],
  exports: [
    HeaderComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink
  ]
})
export class SharedModule { }
