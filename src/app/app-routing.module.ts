import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './views/components/products/product-create/product-create.component';
import { ProductUpdateComponent } from './views/components/products/product-update/product-update.component';

import {HomeComponent} from './views/pages/home/home.component';
import {ProductCrudComponent} from'./views/pages/product-crud/product-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent,
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
