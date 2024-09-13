import { Component, input } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styles: ``,
})
export class ProductCardComponent {
  product = input.required<Product>();
}
