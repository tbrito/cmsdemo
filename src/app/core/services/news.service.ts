import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { News } from '../models/news.model';
import { NewsListConfig } from '../models/news-list-config.model';

@Injectable()
export class NewsService {
  constructor (
    private apiService: ApiService
  ) {}

  query(config: NewsListConfig): Observable<News[]> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
    .forEach((key) => {
      params[key] = config.filters[key];
    });

    return this.apiService
    .get(
      '/beneficios/news',
      new HttpParams({ fromObject: params })
    );
  }

  get(slug): Observable<News> {
    return this.apiService.get('/beneficios/news/' + slug)
      .pipe(map(data => data as News));
  }

  destroy(slug) {
    return this.apiService.delete('/beneficios/news/' + slug);
  }

  save(news): Observable<News> {
    // If we're updating an existing product
    if (news.slug) {
      return this.apiService.put('/beneficios/news/' + news.slug, {news: news})
        .pipe(map(data => data));

    // Otherwise, create a new product
    } else {
      return this.apiService.post('/beneficios/news/', {news: news})
        .pipe(map(data => data as News));
    }
  }

  favorite(slug): Observable<News> {
    return this.apiService.post('/beneficios/news/' + slug + '/favorite');
  }

  unfavorite(slug): Observable<News> {
    return this.apiService.delete('/beneficios/news/' + slug + '/favorite');
  }
}
