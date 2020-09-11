import { Component, Input } from '@angular/core';

import { Product, ProductListConfig as ProductListConfig, ProductsService } from '../../core';
@Component({
  selector: 'app-product-list',
  styleUrls: ['product-list.component.css'],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  constructor (
    private productsService: ProductsService
  ) {}

  @Input() limit: number;
  @Input()
  set config(config: ProductListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: ProductListConfig;
  results: Product[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.results = [];

    // // Create limit and offset filter (if necessary)
    // if (this.limit) {
    //   this.query.filters.limit = this.limit;
    //   this.query.filters.offset =  (this.limit * (this.currentPage - 1));
    // }

    this.productsService.query(this.query)
    .subscribe(data => {
      this.loading = false;
      this.results = data.products;

      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      this.totalPages = Array.from(new Array(Math.ceil(data.productsCount / this.limit)), (val, index) => index + 1);
    });
  }
}
