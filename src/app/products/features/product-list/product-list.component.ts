import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { MAX_PRODUCTS, PRODUCTS_LIMIT } from '../../products-consts';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsStateService],
})
export class ProductListComponent {
  productsState = inject(ProductsStateService);

  getPageProducts() {
    return this.productsState
      .state()
      .products.slice(PRODUCTS_LIMIT * (this.productsState.state().page - 1));
  }

  isPreviousButtonDisabled() {
    console.log({
      page: this.productsState.state().page,
      if: this.productsState.state().page == 1,
    });
    return this.productsState.state().page == 1;
  }

  isNextButtonDisabled() {
    return MAX_PRODUCTS == this.productsState.state().products.length;
  }

  previousPage() {
    this.productsState.changePage$.next(this.productsState.state().page - 1);
  }

  nextPage() {
    this.productsState.changePage$.next(this.productsState.state().page + 1);
  }
}
