import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';

import {
  ApiService,
  ProductsService,
  AuthGuard,
  JwtService,
  ProfilesService,
  TagsService,
  NewsService,
  BannersService,
  UserService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    ProductsService,
    AuthGuard,
    JwtService,
    ProfilesService,
    TagsService,
    NewsService, 
    BannersService,
    UserService
  ],
  declarations: []
})
export class CoreModule { }
