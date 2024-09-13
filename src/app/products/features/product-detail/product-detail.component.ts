import { Component, effect, inject, input } from '@angular/core';
import { ProductDetailStateService } from '../../data-access/product-detail-state.service';

// params metodo 1
// import { Component, inject } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styles: ``,
  providers: [ProductDetailStateService],
})
export default class ProductDetailComponent {
  productDetailState = inject(ProductDetailStateService).state;

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
      console.log(this.id());
      this.productDetailState.getById(this.id());
    });
  }
}
