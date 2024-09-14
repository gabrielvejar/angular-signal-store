import { Component, inject } from '@angular/core';
import { CartItemComponent } from './ui/cart-item/cart-item.component';
import { CartStateService } from '../shared/data-access/cart-state.service';
import { ProductItemCart } from '../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styles: ``,
})
export default class CartComponent {
  state = inject(CartStateService).state;
  onRemove(productId: number) {
    this.state.remove(productId);
  }
  onIncrease(productItemCart: ProductItemCart) {
    this.state.update({
      product: productItemCart.product,
      quantity: productItemCart.quantity + 1,
    });
  }

  onDecrease(productItemCart: ProductItemCart) {
    if (productItemCart.quantity <= 1) {
      this.state.remove(productItemCart.product.id);
    }

    this.state.update({
      product: productItemCart.product,
      quantity: productItemCart.quantity - 1,
    });
  }
}
