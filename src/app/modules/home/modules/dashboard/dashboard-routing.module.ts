import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { ProjectSetupComponent } from './components/project-setup/project-setup.component';
import { SelectFeatureComponent } from './components/select-feature/select-feature.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
