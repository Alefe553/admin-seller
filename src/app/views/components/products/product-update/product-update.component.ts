import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductUpdateService } from 'src/app/services/product-update.service';
import { ShowMessageService } from 'src/app/utils/show-message.service';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(private router: Router, private service: ProductUpdateService, private route: ActivatedRoute, private message: ShowMessageService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(`${id}`).subscribe(product => {
      this.product = product;
    });
  }

  save(): void {
    this.service.update(this.product).subscribe(() => {
    this.message.showMessage("Dados alterados com sucesso!!");
    });
  }

  cancel() {
    this.router.navigate(["/products"]);
  }
}
