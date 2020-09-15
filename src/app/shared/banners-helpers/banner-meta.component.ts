import { Component, Input } from '@angular/core';
import { Banner } from '../../core/models/banner.model';

@Component({
  selector: 'app-banner-meta',
  templateUrl: './banner-meta.component.html'
})
export class BannerMetaComponent {
  @Input() banner: Banner;
}
