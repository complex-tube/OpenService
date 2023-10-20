import { Component } from '@angular/core';
import {CategoriesService} from "../../../core/services/categories/categories.service";
import {Observable} from "rxjs";
import {CategoryModel} from "../../../core/models/category.model";

@Component({
  selector: 'os-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {

  categories$: Observable<CategoryModel[]>;

  constructor(private categoriesService: CategoriesService) {
    this.categories$ = this.categoriesService.getCategories();
  }

}
