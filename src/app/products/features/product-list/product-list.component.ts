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
  getPage = () => this.productsState.state.page();

  getPageProducts() {
    return this.productsState
      .state()
      .products.slice(PRODUCTS_LIMIT * (this.getPage() - 1));
  }

  isPreviousButtonDisabled() {
    return this.getPage() == 1;
  }

  isNextButtonDisabled() {
    return MAX_PRODUCTS == this.productsState.state().products.length;
  }

  previousPage() {
    this.productsState.changePage$.next(this.getPage() - 1);
  }

  nextPage() {
    this.productsState.changePage$.next(this.getPage() + 1);
  }
}
