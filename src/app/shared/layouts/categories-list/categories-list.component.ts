import { Component } from '@angular/core';
import {CategoriesService} from "../../../core/services/categories/categories.service";
import {CategoryModel} from "../../../core/models/api/category.model";
import {Router} from "@angular/router";

@Component({
  selector: 'os-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent {

  constructor(protected categoriesService: CategoriesService, private router: Router) {
  }

  routeCategory(category: CategoryModel) {
    this.router.navigate([`products`], {queryParams: {category: category.id}});
  }
}
