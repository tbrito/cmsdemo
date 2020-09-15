import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductListComponent, ProductMetaComponent, ProductPreviewComponent } from './product-helpers';
import { FavoriteButtonComponent, FollowButtonComponent } from './buttons';
import { ListErrorsComponent } from './list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { NewsListComponent } from './news-helpers/news-list.component';
import { NewsMetaComponent } from './news-helpers/news-meta.component';
import { NewsPreviewComponent } from './news-helpers';
import { BannerListComponent, BannerMetaComponent, BannerPreviewComponent } from './banners-helpers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    ProductListComponent,
    ProductMetaComponent,
    ProductPreviewComponent,
    NewsListComponent,
    NewsMetaComponent,
    NewsPreviewComponent,
    BannerListComponent,
    BannerMetaComponent,
    BannerPreviewComponent,
    FavoriteButtonComponent,
    FollowButtonComponent,
    ListErrorsComponent,
    ShowAuthedDirective
  ],
  exports: [
    ProductListComponent,
    ProductMetaComponent,
    ProductPreviewComponent,
    NewsListComponent,
    NewsMetaComponent,
    NewsPreviewComponent,
    BannerListComponent,
    BannerMetaComponent,
    BannerPreviewComponent,
    CommonModule,
    FavoriteButtonComponent,
    FollowButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective
  ]
})
export class SharedModule {}
