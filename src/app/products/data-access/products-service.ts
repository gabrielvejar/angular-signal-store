import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../shared/data-access/base-http-service';
import { Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/product';

@Injectable({ providedIn: 'root' })
export class ProductService extends BaseHttpService {
  getProducts(): Observable<Product[]> {
    console.log(`${this.apiUrl}`);
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
}
