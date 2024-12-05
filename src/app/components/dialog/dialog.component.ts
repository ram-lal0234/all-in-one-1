import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule,DialogModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  providers: [DialogService]
})
export class DialogComponent {
  dialogData: any; // Data passed to the dialog component

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {}

  ngOnInit(): void {
    // Access passed data from the config
    this.dialogData = this.config.data;
  }

  // Function to close the dialog
  closeDialog() {
    this.ref.close();
  }
}
