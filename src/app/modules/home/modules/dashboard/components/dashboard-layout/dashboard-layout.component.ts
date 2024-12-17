import { Component } from '@angular/core';
import { AuthService } from '../../../../../../services/auth.service';
import { DialogService } from 'primeng/dynamicdialog';
import { Database, get, ref, set, update } from '@angular/fire/database';
import { Router } from '@angular/router';
import { SelectFeatureComponent } from '../select-feature/select-feature.component';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {
  constructor(
    private authService: AuthService,
    private dialogService: DialogService,
    private database: Database,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        const orgId = user.uid; // Assuming UID is used as orgId
        const orgRef = ref(this.database, `organizations/${orgId}`);

        get(orgRef).then((snapshot) => {
          const orgData = snapshot.val();
          if (orgData && orgData.selectedFeature) {
            // Navigate directly to the selected feature
            this.navigateToFeature(orgData.selectedFeature);
          } else {
            // Show feature selection dialog
            this.showFeatureSelectionDialog(orgId);
          }
        });
      }
    });
  }

  showFeatureSelectionDialog(orgId: string) {
    const ref = this.dialogService.open(SelectFeatureComponent, {
      header: 'Feature Selection',
      width: '30%',
    });

    ref.onClose.subscribe((selectedFeature) => {
      if (selectedFeature) {
        this.saveSelectedFeature(orgId, selectedFeature);
      }
    });
  }

  saveSelectedFeature(orgId: string, selectedFeature: string) {
    const orgRef = ref(this.database, `organizations/${orgId}`);
    update(orgRef, { selectedFeature ,updatedAt: new Date()  }).then(() => {
      this.navigateToFeature(selectedFeature);
    }).catch((error) => {
      console.error('Error saving selected feature:', error);
    });
  }
  

  navigateToFeature(feature: string) {
    if (feature === 'Blog') {
      this.router.navigate(['/dashboard/blog']);
    } else if (feature === 'Catalog') {
      this.router.navigate(['/dashboard']);
    }
  }
}
