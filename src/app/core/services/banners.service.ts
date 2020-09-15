import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { BannerListConfig } from '../models/banner-list-config.model';
import { News } from '..';
import { Banner } from '../models/banner.model';

@Injectable()
export class BannersService {
  constructor (
    private apiService: ApiService
  ) {}

  query(config: BannerListConfig): Observable<Banner[]> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
    .forEach((key) => {
      params[key] = config.filters[key];
    });

    return this.apiService
    .get(
      '/beneficios/banners',
      new HttpParams({ fromObject: params })
    );
  }

  get(slug): Observable<Banner> {
    return this.apiService.get('/beneficios/banners/' + slug)
      .pipe(map(data => data as Banner));
  }

  destroy(slug) {
    return this.apiService.delete('/beneficios/banners/' + slug);
  }

  save(banner): Observable<Banner> {
    // If we're updating an existing product
    if (banner.id) {
      return this.apiService.put('/beneficios/banners/' + banner.id, {banner: banner})
        .pipe(map(data => data));

    // Otherwise, create a new product
    } else {
      return this.apiService.post('/beneficios/banners/', {banner: banner})
        .pipe(map(data => data as Banner));
    }
  }

  favorite(slug): Observable<News> {
    return this.apiService.post('/beneficios/banners/' + slug + '/favorite');
  }

  unfavorite(slug): Observable<News> {
    return this.apiService.delete('/beneficios/banners/' + slug + '/favorite');
  }
}
