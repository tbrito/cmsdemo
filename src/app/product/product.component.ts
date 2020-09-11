import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Product,
  ProductsService,
  User,
  UserService
} from '../core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  product: Product;
  currentUser: User;
  canModify: boolean;
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { product: Product }) => {
        this.product = data.product;

      }
    );

    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;

        this.canModify = true;
      }
    );
  }

  onToggleFavorite(favorited: boolean) {
    this.product.favorites = favorited;
  }

  onToggleFollowing(following: boolean) {
    ////this.product.author.following = following;
  }

  deleteProduct() {
    this.isDeleting = true;

    this.productsService.destroy(this.product.id)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }
}
