import { Component, input, output } from '@angular/core';
import { ProductItemCart } from '../../../shared/interfaces/product.interface';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  productItemCart = input.required<ProductItemCart>();

  onRemove = output<number>();
  onIncrease = output<ProductItemCart>();
  onDecrease = output<ProductItemCart>();

  // remove() {
  //   this.onRemove.emit(this.productItemCart().product.id)
  // }

  // increase() {
  //   this.onIncrease.emit(this.productItemCart())
  // }
  // decrease() {
  //   this.onDecrease.emit(this.productItemCart())
  // }
}
