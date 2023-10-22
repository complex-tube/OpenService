import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CategoriesService} from "../core/services/categories/categories.service";

@Component({
  selector: 'os-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  searchFormGroup!: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              protected categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.searchFormGroup = this.formBuilder.group({
      category: [''],
      product: ['']
    })
  }

  onSearch(): void {
    const search: {category: string, product: string} = {
      category: this.searchFormGroup.get('category')?.value,
      product: this.searchFormGroup.get('product')?.value
    };
    this.router.navigate(['products'], {queryParams: {category: search.category, name: search.product}});
  }
}
