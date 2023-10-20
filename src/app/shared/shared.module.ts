import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoriesListComponent } from './layouts/categories-list/categories-list.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatListModule} from "@angular/material/list";



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
    RouterLink,
    MatListModule
  ]
})
export class SharedModule { }
