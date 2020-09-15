import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Product, ProductsService, UserService } from '../../core';
import { of } from 'rxjs';
import { concatMap ,  tap } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html'
})
export class FavoriteButtonComponent {
  constructor(
    private productsService: ProductsService,
    private router: Router,
    private userService: UserService
  ) {}

  @Input() product: Product;
  @Output() toggle = new EventEmitter<boolean>();
  isSubmitting = false;

  toggleFavorite() {
    this.isSubmitting = true;

    this.userService.isAuthenticated.pipe(concatMap(
      (authenticated) => {
        // Not authenticated? Push to login screen
        if (!authenticated) {
          this.router.navigateByUrl('/login');
          return of(null);
        }

        // Favorite the product if it isn't favorited yet
        // if (!this.product.favorited) {
        //   return this.productsService.favorite(this.product.id)
        //   .pipe(tap(
        //     data => {
        //       this.isSubmitting = false;
        //       this.toggle.emit(true);
        //     },
        //     err => this.isSubmitting = false
        //   ));

        // // Otherwise, unfavorite the product
        // } else {
        //   return this.productsService.unfavorite(this.product.id)
        //   .pipe(tap(
        //     data => {
        //       this.isSubmitting = false;
        //       this.toggle.emit(false);
        //     },
        //     err => this.isSubmitting = false
        //   ));
        // }

      }
    )).subscribe();
  }
}
