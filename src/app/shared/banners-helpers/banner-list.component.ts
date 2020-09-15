import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BannersService } from '../../core';
import { BannerListConfig } from '../../core/models/banner-list-config.model';
import { Banner } from '../../core/models/banner.model';

@Component({
  selector: 'app-banner-list',
  styleUrls: ['banner-list.component.css'],
  templateUrl: './banner-list.component.html'
})
export class BannerListComponent {
  constructor (
    private bannersService: BannersService
  ) {}

  @Input() limit: number;
  @Input()
  set config(config: BannerListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  query: BannerListConfig;
  results: Banner[];
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

    this.bannersService.query(this.query)
    .subscribe(data => {
      this.loading = false;
      console.log(data);
      this.results = data;
      this.results.forEach(x => x.media.forEach(i => i.url = environment.url_images + '/' + i.url));

      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      this.totalPages = Array.from(new Array(Math.ceil(data.length / this.limit)), (val, index) => index + 1);
    });
  }
}
