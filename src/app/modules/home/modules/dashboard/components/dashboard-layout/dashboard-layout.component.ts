import { Component } from '@angular/core';
import { AuthService } from '../../../../../../services/auth.service';
import { DialogService } from 'primeng/dynamicdialog';
import { Database, get, ref, set, update } from '@angular/fire/database';
import { NavigationStart, Router } from '@angular/router';
import { SelectFeatureComponent } from '../select-feature/select-feature.component';
import { take } from 'rxjs';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {
  sideNavItems: { label: string; route: string ; icon: string }[] = [];
  selectedFeature: string | null = null;
  constructor(
    private authService: AuthService,
    private dialogService: DialogService,
    private database: Database,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.user$.pipe(take(1)).subscribe((user) => {
      if (user) {
        const orgId = user.uid; // Assuming UID is used as orgId
        const orgRef = ref(this.database, `organizations/${orgId}`);

        get(orgRef).then((snapshot) => {
          const orgData = snapshot.val();
          this.selectedFeature = orgData?.selectedFeature || null;
          this.updateSideNav();
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
      this.router.navigate(['/dashboard/catalog']);
    }
  }

  updateSideNav() {
    if (this.selectedFeature === 'Blog') {
      this.sideNavItems = [
        { label: 'Dashboard', route: '/dashboard', icon: 'pi pi-home' },
        { label: 'Create Blog', route: '/dashboard/blog/create', icon: 'pi pi-plus' },
        { label: 'Manage Blogs', route: '/dashboard/blog/manage', icon: 'pi pi-list' },
      ];
    } else if (this.selectedFeature === 'Catalog') {
      this.sideNavItems = [
        { label: 'Product', route: '/dashboard', icon: 'pi pi-home' },
      ];
    } else {
      this.sideNavItems = [
        { label: 'Select Feature', route: '/dashboard/project-setup', icon: 'pi pi-cog' },
      ];
    }
  }
}
