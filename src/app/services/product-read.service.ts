import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'any'
})
export class ProductReadService {
  baseUrl = 'http://localhost:3001/products';

  constructor(private http: HttpClient) { }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }
}
