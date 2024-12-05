import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems = [
    { label: 'Home', icon: 'pi pi-home', link: '/' },
    { label: 'Features', icon: 'pi pi-star', link: '/features' },
    { label: 'Pricing', icon: 'pi pi-dollar', link: '/pricing' },
    { label: 'About', icon: 'pi pi-info-circle', link: '/about' }
  ];
}
