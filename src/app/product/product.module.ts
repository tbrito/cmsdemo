import { ModuleWithProviders, NgModule } from '@angular/core';

import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductResolver } from './product-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent,
    MarkdownPipe
  ],

  providers: [
    ProductResolver
  ]
})
export class ProductModule {}
