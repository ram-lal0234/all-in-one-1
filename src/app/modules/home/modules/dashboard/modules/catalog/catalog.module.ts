import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DashboardHeaderComponent } from '../../components/dashboard-header/dashboard-header.component';
import { InputTextComponent } from '../../../../../../components/input-text/input-text.component';
import { InputTextareaComponent } from '../../../../../../components/input-textarea/input-textarea.component';
import { InputNumberComponent } from '../../../../../../components/input-number/input-number.component';
import { ButtonComponent } from '../../../../../../components/button/button.component';

import { TableModule } from 'primeng/table';
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    DashboardHeaderComponent,
    InputTextComponent,
    InputTextareaComponent,
    InputNumberComponent,
    ButtonComponent,
    ColorPickerModule,
    TableModule,
    RatingModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CatalogModule { }
