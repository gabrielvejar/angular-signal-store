import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../shared/data-access/base-http-service';
import { Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/product';
import { PRODUCTS_LIMIT } from '../products-consts';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseHttpService {
  getProducts(page: number): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/products?limit=${page * PRODUCTS_LIMIT}`,
    );
  }
}
