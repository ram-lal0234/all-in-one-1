import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { FooterComponent } from "./core/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'all-in-one';
}
