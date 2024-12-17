import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly createProjectUrl = `https://cloudresourcemanager.googleapis.com/v1/projects`;

  constructor(private http: HttpClient) {}

  /**
   * Create a Firebase project in the admin's account.
   * @param accessToken - Admin's Firebase access token.
   * @param projectId - Unique project ID for the new Firebase project.
   */
  createFirebaseProject(accessToken: string, projectId: string): Observable<any> {
    const payload = { projectId, name: projectId };
    console.log(payload , accessToken);
    return this.http.post(this.createProjectUrl, payload, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }
}
