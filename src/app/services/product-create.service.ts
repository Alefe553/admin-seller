import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ShowMessageService } from '../utils/show-message.service';

@Injectable({
  providedIn: 'any',
})
export class ProductService{

  baseUrl = 'http://localhost:3001/products';

  constructor(private http: HttpClient, private message: ShowMessageService) { }

  succes(): void{
    this.message.showMessage("Cadastrado com sucesso");
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }
}
