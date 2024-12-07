import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule ,ButtonModule ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
// Input properties to allow customization of the button
@Input() label: string = '';
@Input() icon: string = '';
@Input() iconPosition: 'left' | 'right' = 'left';
@Input() styleClass: string = '';
@Input() type: 'button' | 'submit' | 'reset' = 'button';
@Input() disabled: boolean = false;
@Input() loading: boolean = false;
@Input() rounded : boolean = false;

constructor() {}
}
