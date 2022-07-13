import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductDeleteService } from 'src/app/services/product-delete.service';
import { ShowMessageService } from 'src/app/utils/show-message.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(
    private service: ProductDeleteService,
    private message: ShowMessageService,
    private dialogRef: MatDialogRef<ProductDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void { }

  delete(id: any): void {
    this.service.delete(id).subscribe(() => {
      this.message.showMessage("deletado com sucesso");
      this.dialogRef.close();
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
