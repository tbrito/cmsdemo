import { Component, Input } from '@angular/core';

import { Product } from '../../core';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html'
})
export class ProductPreviewComponent {
  @Input() product: Product;

  onToggleFavorite(favorited: boolean) {
    // this.product['favorited'] = favorited;

    // if (favorited) {
    //   this.product['favoritesCount']++;
    // } else {
    //   this.product['favoritesCount']--;
    // }
  }
}
