import { Component, OnInit } from '@angular/core';
import { ProductReadService } from 'src/app/services/product-read.service';
import { ShowDialogService } from 'src/app/utils/show-dialog.service';
import { Product } from '../../../../models/product.model';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];

  displayedColumns: string[] = ['id', 'name', 'price', 'actions']

  constructor(private productRead: ProductReadService, private dialog: ShowDialogService) { }

  ngOnInit(): void {
    this.productRead.read().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

  showDialog(data: {}): void {
    this.dialog.openDialog(ProductDeleteComponent, data);
  }
}
