import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ShowDialogService {

  constructor(private dialog: MatDialog) { }

  openDialog(component: ComponentType<unknown>, data: {}): void {
    const dialogRef = this.dialog.open(component, {
      width: '250px',
      data: data,
    });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }
}
