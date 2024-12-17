import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  headerActions = [
    { label: '', icon: 'pi pi-refresh', action: 'Refresh' },
    { label: 'Add Product', icon: 'pi pi-plus', action: 'ADD_PRODUCT' },
  ];

  constructor ( private router : Router) {}

  ngOnInit(): void {
    this.products = this.getMockData();
  }

  handleSearch(query: string) {
    console.log('Search query in Catalog:', query);
    // Implement catalog-specific search logic here
  }

  handleAction(action: any) {
    if (action === 'ADD_PRODUCT') {
      // Redirect to Add Product page
      this.router.navigate(['/dashboard/catalog/add-product']);
    } else if (action === 'IMPORT') {
      console.log('Import functionality triggered');
    }
  }

  getMockData(): any[] {
    return [
      {
        name: 'Laptop',
        category: 'Electronics',
        price: 899.99,
        rating: 4,
        image: 'https://via.placeholder.com/150x150?text=Laptop',
      },
      {
        name: 'Smartphone',
        category: 'Electronics',
        price: 499.99,
        rating: 5,
        image: 'https://via.placeholder.com/150x150?text=Smartphone',
      },
      {
        name: 'Coffee Maker',
        category: 'Appliances',
        price: 99.99,
        rating: 3,
        image: 'https://via.placeholder.com/150x150?text=Coffee+Maker',
      },
      {
        name: 'Gaming Chair',
        category: 'Furniture',
        price: 159.99,
        rating: 4,
        image: 'https://via.placeholder.com/150x150?text=Gaming+Chair',
      },
      {
        name: 'Blender',
        category: 'Appliances',
        price: 79.99,
        rating: 4,
        image: 'https://via.placeholder.com/150x150?text=Blender',
      },
    ];
  }
}
