import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { ProjectSetupComponent } from './components/project-setup/project-setup.component';
import { SelectFeatureComponent } from './components/select-feature/select-feature.component';


  const routes: Routes = [
    {
      path: '',
      component: DashboardLayoutComponent,
      children: [
        {
          path: 'blog',
          loadChildren: () =>
            import('./modules/blog/blog.module').then((m) => m.BlogModule),
        },
        {
          path: 'catalog',
          loadChildren: () =>
            import('./modules/catalog/catalog.module').then((m) => m.CatalogModule),
        },
        { path: '', redirectTo: '', pathMatch: 'full' },
      ],
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
