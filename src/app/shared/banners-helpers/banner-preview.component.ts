import { Component, Input } from '@angular/core';
import { Banner } from '../../core/models/banner.model';

@Component({
  selector: 'app-banner-preview',
  templateUrl: './banner-preview.component.html'
})
export class BannerPreviewComponent {
  @Input() banner: Banner;

  onToggleFavorite(favorited: boolean) {
    this.banner['favorited'] = favorited;

    if (favorited) {
      this.banner['favoritesCount']++;
    } else {
      this.banner['favoritesCount']--;
    }
  }
}
