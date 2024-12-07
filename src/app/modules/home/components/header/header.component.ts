import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ToastService } from '../../../../services/toast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user$;
  menuItems: MenuItem[] = [];
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {
    this.user$ = authService.getUser();
   (this.user$.subscribe((user) => console.log(user)));
  }

  ngOnInit() {
    // Get current user
    this.authService.getUser().subscribe((currentUser) => {
      if(currentUser){
        this.updateMenuItems();
        this.router.navigate(['/dashboard']);
      }else{
        this.router.navigate(['/home']);
      }

    });
  }

  updateMenuItems() {
    this.menuItems = [
      {
        label: 'Profile',
        icon: 'pi pi-user',
        command: () => this.router.navigate(['/profile']),
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        command: () => this.router.navigate(['/settings']),
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out',
        command: () => this.signOut(),
      },
    ];
  }

  // Handle Sign-In button click
  signInWithGoogle() {
      this.authService.signInWithGoogle().subscribe((user) => {
        if (user!) {
          this.router.navigate(['/dashboard']);
          this.toastService.showSuccess('Signed in successfully');
        }
      });
  }

  // Handle Sign-Out button click
  signOut() {
    this.authService.signOut();
    this.router.navigate(['/home']);
  }
}