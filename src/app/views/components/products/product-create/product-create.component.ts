import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product-create.service';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
  };

  constructor(private productServer: ProductService, private router: Router) { }

  ngOnInit(): void { }

  save() {
    this.productServer.create(this.product).subscribe(() => {
      this.productServer.succes();
      this.router.navigate(["/products"]);
    });
  }

  cancel() {
    this.router.navigate(["/products"]);
  }
}
