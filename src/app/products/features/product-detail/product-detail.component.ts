import { Component, effect, inject, input } from '@angular/core';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { CartStateService } from '../../../shared/data-access/cart-state.service';

// params metodo 1
// import { Component, inject } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [TitleCasePipe, CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductDetailStateService],
})
export default class ProductDetailComponent {
  productDetailState = inject(ProductDetailStateService).state;
  cartState = inject(CartStateService).state;

  // params metodo 1
  // private activatedRoute = inject(ActivatedRoute);
  // constructor() {
  //   this.activatedRoute.params.subscribe((params) => {
  //     console.log(params['id']);
  //   });
  // }

  // params metodo 2
  id = input.required<string>();

  constructor() {
    effect(() => {
      this.productDetailState.getById(this.id());
    });
  }
  addToCart() {
    this.cartState.add({
      product: this.productDetailState().product!,
      quantity: 1,
    });
  }
}
