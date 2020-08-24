import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BannerService } from './services/banner.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit  {
  
  title = 'demo';
  private subscription: Subscription;
  public bannerRet: any;
  
  constructor(private bannerService: BannerService) {}

  ngOnInit() {
    var ret = this.bannerService.getById(2);

    console.log(this.bannerService.banners);
  }
}
