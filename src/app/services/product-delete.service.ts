import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'any'
})
export class ProductDeleteService {

  constructor(private http: HttpClient) { }

  delete(id: String): Observable<Product>{
    const baseUrl = `http://localhost:3001/products/${id}`;
    return this.http.delete<Product>(baseUrl);
  }
}
