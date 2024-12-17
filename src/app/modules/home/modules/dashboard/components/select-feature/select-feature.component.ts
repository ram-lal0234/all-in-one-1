import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-select-feature',
  templateUrl: './select-feature.component.html',
  styleUrl: './select-feature.component.scss'
})
export class SelectFeatureComponent {
  constructor(private ref: DynamicDialogRef) {}

  selectFeature(feature: string) {
    this.ref.close(feature); // Pass the selected feature back to the caller
  }
}
