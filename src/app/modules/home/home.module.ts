import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FeatureComponent } from './components/feature/feature.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routes.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog'; 
import { DynamicDialogService } from '../../services/dynamic-dialog.service';
import { ButtonComponent } from '../../components/button/button.component';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CardComponent } from '../../components/card/card.component';


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
    DynamicDialogModule,
    DialogModule,
    ButtonComponent,
    MenubarModule,
    BadgeModule, 
    AvatarModule, 
    InputTextModule, 
    RippleModule,
    CardComponent
  ],
  providers: [DialogService , DynamicDialogService],
})
export class HomeModule { }
