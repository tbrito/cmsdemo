import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import { ProductListConfig } from '..';

@Injectable()
export class ProductsService {
  constructor (
    private apiService: ApiService
  ) {}

  query(config: ProductListConfig): Observable<{products: Product[], productsCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
    .forEach((key) => {
      params[key] = config.filters[key];
    });

    return this.apiService
    .get(
      '/beneficios/products',
      new HttpParams({ fromObject: params })
    );
  }

  get(slug): Observable<Product> {
    return this.apiService.get('/beneficios/products/' + slug)
      .pipe(map(data => data.product));
  }

  destroy(slug) {
    return this.apiService.delete('/beneficios/products/' + slug);
  }

  save(product): Observable<Product> {
    // If we're updating an existing product
    if (product.slug) {
      return this.apiService.put('/beneficios/products/' + product.slug, {product: product})
        .pipe(map(data => data.product));

    // Otherwise, create a new product
    } else {
      return this.apiService.post('/beneficios/products/', {product: product})
        .pipe(map(data => data.product));
    }
  }

  favorite(slug): Observable<Product> {
    return this.apiService.post('/beneficios/products/' + slug + '/favorite');
  }

  unfavorite(slug): Observable<Product> {
    return this.apiService.delete('/beneficios/products/' + slug + '/favorite');
  }
}
