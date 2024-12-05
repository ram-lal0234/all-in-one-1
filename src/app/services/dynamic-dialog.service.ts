import { Injectable } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig, DialogService } from 'primeng/dynamicdialog';
import { DialogComponent } from '../components/dialog/dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DynamicDialogService {
  constructor(private dynamicDialogService: DialogService) {}

  // Function to open a dialog dynamically
  openDialog(config: DynamicDialogConfig): DynamicDialogRef {
    return this.dynamicDialogService.open(DialogComponent, config);
  }
}
