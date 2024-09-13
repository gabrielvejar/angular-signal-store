import { effect, inject, Injectable, Signal } from '@angular/core';
import { ProductItemCart } from '../interfaces/product.interface';
import { signalSlice } from 'ngxtension/signal-slice';
import { StorageService } from './storage.service';
import { map, Observable } from 'rxjs';

interface State {
  products: ProductItemCart[];
  loaded: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class CartStateService {
  private _storageService = inject(StorageService);

  private initialState: State = {
    products: [],
    loaded: false,
  };

  loadProducts$ = this._storageService
    .loadProducts()
    .pipe(map((products) => ({ products, loaded: true })));

  state = signalSlice({
    initialState: this.initialState,
    sources: [this.loadProducts$],
    // effects: (state) => ({
    //   load: () => {
    //     console.log(state.products());
    //   },
    // }),
    actionSources: {
      add: (state: Signal<State>, action$: Observable<ProductItemCart>) =>
        action$.pipe(map((product) => this.add(state, product))),
    },
  });

  private add(state: Signal<State>, product: ProductItemCart) {
    const isInCard = state().products.find(
      (productInCard) => productInCard.product.id === product.product.id,
    );

    if (!isInCard) {
      return { products: [...state().products, { ...product, quantity: 1 }] };
    }

    isInCard.quantity++;
    return { products: [...state().products] };
  }

  constructor() {
    effect(() => {
      if (this.state().loaded === true) {
        console.log(this.state.products());
        this._storageService.saveProducts(this.state().products);
      }
    });
  }
}
