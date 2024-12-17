import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { CardComponent } from '../../../../components/card/card.component';
import { SelectFeatureComponent } from './components/select-feature/select-feature.component';
import { ProjectSetupComponent } from './components/project-setup/project-setup.component';
import { ButtonComponent } from '../../../../components/button/button.component';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule , DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@NgModule({
  declarations: [
    SideNavComponent,
    DashboardLayoutComponent,
    SelectFeatureComponent,
    ProjectSetupComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardComponent,
    ButtonComponent,
    DialogModule,
    DynamicDialogModule
  ],
  providers: [
    DynamicDialogRef,
    DynamicDialogConfig
  ]
})
export class DashboardModule { }
