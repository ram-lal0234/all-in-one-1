import { Component } from '@angular/core';
import { DynamicDialogService } from '../../../../services/dynamic-dialog.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private router: Router, private dialogService: DynamicDialogService) {}

  // Method to open the dynamic dialog
  openFeatureDialog(featureType: string) {
    const dialogConfig: DynamicDialogConfig = {
      data: this.getFeatureDetails(featureType),
      header: `${featureType} Features`,
      width: '50%',
    };

    this.dialogService.openDialog(dialogConfig);
  }

  // Method to get the data based on feature type
  getFeatureDetails(featureType: string) {
    switch (featureType) {
      case 'Catalog':
        return {
          title: 'Catalog Management',
          description:
            'Our catalog feature allows you to easily manage and organize your products, categorize them, and showcase them on your website.',
          features: [
            'Easy Product Management',
            'Customizable Product Categories',
            'Product Pricing & Stock Management',
            'Integrated Payment Gateways',
          ],
        };
      case 'Blog':
        return {
          title: 'Blog Management',
          description:
            'With our blog feature, you can create, edit, and publish your own blog posts. Share your thoughts, stories, or news with your audience.',
          features: [
            'Easy Blog Post Creation',
            'Customizable Themes & Layouts',
            'Engage with your Audience via Comments',
            'Monetization Options',
          ],
        };
      default:
        return {};
    }
  }

  // Navigate to Catalog or Blog Page
  goToCatalog() {
    this.router.navigate(['/catalog']);
  }

  goToBlog() {
    this.router.navigate(['/blog']);
  }

  // Navigate to Authentication Page (Login/Signup)
  navigateToAuth() {
    this.router.navigate(['/auth/login']);
  }
}
