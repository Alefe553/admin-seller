import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'any'
})
export class ProductUpdateService {
  baseUrl = 'http://localhost:3001/products';

  constructor(private http: HttpClient, private route: Router) { }

  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`;
    this.route.navigate(["/products"]);
    return this.http.put<Product>(url, product);
  }
}
