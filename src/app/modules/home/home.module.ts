import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routes.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog'; 
import { DynamicDialogService } from '../../services/dynamic-dialog.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FeatureComponent,
    FooterComponent,
    HomeComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    DynamicDialogModule,
    DialogModule
  ],
  providers: [DialogService , DynamicDialogService],
})
export class HomeModule { }
