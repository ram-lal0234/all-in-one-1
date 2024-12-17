import { CommonModule } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonComponent } from '../../../../../../components/button/button.component';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CommonModule , InputTextModule , ButtonComponent , FormsModule],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DashboardHeaderComponent),
      multi: true,
    }
  ]
})
export class DashboardHeaderComponent implements ControlValueAccessor  {
  @Input() title: string = '';
  @Input() actions: { label: string; icon: string; action: string }[] = [];
  @Output() search = new EventEmitter<string>();
  @Output() actionTriggered = new EventEmitter<string>();

  searchQuery: string = '';

  onSearch() {
    this.search.emit(this.searchQuery);
  }

  triggerAction(action: string) {
    this.actionTriggered.emit(action);
  }

  value: number | null = null;
  onChange = (value: number | null) => {};
  onTouched = () => {};

  writeValue(value: number | null): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(value: string): void {
    const numericValue = value ? +value : null;
    this.value = numericValue;
    this.onChange(numericValue);
    this.onTouched();
  }
}
