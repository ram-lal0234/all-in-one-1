import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit {
  addProductForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the FormGroup
    this.addProductForm = this.fb.group({
      productName: ['', Validators.required],
      productImages: [null],
      description: [''],
      quantity: [0, [Validators.required, Validators.min(1)]],
      stockDetails: [''],
      color: ['#ffffff'], // Default color
      size: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      discountPrice: [0, Validators.min(0)],
      thumbnail: [null],
    });
  }

  onSave(): void {
    if (this.addProductForm.valid) {
      console.log('Form Submitted:', this.addProductForm.value);
      // Save product logic here
    } else {
      console.error('Form is invalid!');
    }
  }
}

