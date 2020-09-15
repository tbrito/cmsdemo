import { Component, Input } from '@angular/core';

import { News } from '../../core';

@Component({
  selector: 'app-news-meta',
  templateUrl: './news-meta.component.html'
})
export class NewsMetaComponent {
  @Input() news: News;
}
