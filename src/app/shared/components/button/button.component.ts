import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = ''; // Default to an empty string
  @Input() icon: string = '';  // Default to an empty string
  @Input() styleClass: string = ''; // Default to an empty string
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; // Default to 'button'
  @Input() disabled: boolean = false; // Default to false
  @Input() iconPosition: 'left' | 'right' = 'left'; // Default to 'left'

}
