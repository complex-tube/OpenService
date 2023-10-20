import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoriesListComponent } from './layouts/categories-list/categories-list.component';



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
    CommonModule
  ]
})
export class SharedModule { }
