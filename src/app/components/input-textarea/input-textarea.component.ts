import { CommonModule } from '@angular/common';
import { Component, forwardRef, input, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-textarea',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , FormsModule],
  templateUrl: './input-textarea.component.html',
  styleUrl: './input-textarea.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextareaComponent),
      multi: true,
    },
  ],
})
export class InputTextareaComponent implements ControlValueAccessor  {
  @Input() label!: string;
  @Input() id!: string;
  @Input() controlName!: string;
  @Input() formGroup!: FormGroup;
  @Input() errorMessage: string = 'Invalid input';

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
