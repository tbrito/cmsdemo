import { Component, Input } from '@angular/core';

import { Product } from '../../core';

@Component({
  selector: 'app-product-meta',
  templateUrl: './product-meta.component.html'
})
export class ProductMetaComponent {
  @Input() product: Product;
}
