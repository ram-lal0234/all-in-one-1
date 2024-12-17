import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { AuthService } from '../../../../../../services/auth.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-project-setup',
  templateUrl: './project-setup.component.html',
  styleUrl: './project-setup.component.scss'
})
export class ProjectSetupComponent {
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private dashboardService: DashboardService,
    private authService: AuthService
  ) {}

  setupFirebaseProject() {
    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.authService.getAccessToken().subscribe({
      next: (accessToken) => {
        console.log('Access token retrieved:', accessToken);
        const projectId = `project-${uuidv4()}`; // Generate a unique project ID
        this.dashboardService.createFirebaseProject(accessToken, projectId).subscribe({
          next: (response) => {
            this.loading = false;
            this.successMessage = `Firebase project "${projectId}" created successfully!`;
            console.log('Project created:', response);
          },
          error: (err) => {
            this.loading = false;
            this.errorMessage = 'Failed to create Firebase project.';
            console.error('Error creating project:', err);
          },
        });
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Failed to retrieve access token.';
        console.error('Access token error:', err);
      },
    });
  }
}
