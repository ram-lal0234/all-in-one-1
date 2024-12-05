import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {  CardModule } from 'primeng/card';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,CardModule,ButtonComponent ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() content: string = '';
  @Input() buttonLabel: string = 'Learn More';
  @Input() buttonLink: string = ''; // Optional for navigation

}
