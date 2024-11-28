import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';

const routes: Routes = [
  { path: '', component: DashboardHomeComponent }, // Default Dashboard Home
  { path: 'catalog', loadChildren: () => import('../catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'blog', loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule) }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
