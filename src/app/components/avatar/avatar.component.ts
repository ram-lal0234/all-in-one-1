import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule, AvatarModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() photoUrl: string | null | undefined = null; // Allow null/undefined
  @Input() fullName: string | null | undefined = null; // Allow null/undefined

  get initials(): string {
    if (!this.fullName) return '?'; // Default to '?' if no name provided
    const nameParts = this.fullName.split(' ');
    const initials = nameParts.map(part => part[0]).join('').toUpperCase();
    return initials.length > 2 ? initials.slice(0, 2) : initials;
  }

  get nameBasedColor(): string {
    if (!this.fullName) return 'hsl(0, 0%, 80%)'; // Default color if name is missing
    const hash = this.fullName
      .split('')
      .reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 70%, 80%)`;
  }
  
}
