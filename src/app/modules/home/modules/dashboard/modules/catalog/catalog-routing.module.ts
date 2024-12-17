import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  {
    path: 'manage-product',
    component: ProductListComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'edit-product/:id',
    component: ProductListComponent
  },
  { path: '', redirectTo: 'manage-product', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
