import { Component, Input } from '@angular/core';

import { News } from '../../core';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html'
})
export class NewsPreviewComponent {
  @Input() news: News;

  onToggleFavorite(favorited: boolean) {
    this.news['favorited'] = favorited;

    if (favorited) {
      this.news['favoritesCount']++;
    } else {
      this.news['favoritesCount']--;
    }
  }
}
