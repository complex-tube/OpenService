import { Component } from '@angular/core';
import {CategoriesService} from "../../../core/services/categories/categories.service";
import {Observable} from "rxjs";
import {CategoryModel} from "../../../core/models/category.model";
import {Router} from "@angular/router";

@Component({
  selector: 'os-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {

  categories$: Observable<CategoryModel[]>;

  constructor(private categoriesService: CategoriesService, private router: Router) {
    this.categories$ = this.categoriesService.getCategories();
  }

  routeCategory(category: CategoryModel) {
    this.router.navigate([`products`], {queryParams: {category: category.id}});
  }
}
