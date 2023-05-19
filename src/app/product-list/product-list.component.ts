import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import productData from '../products.json';
import { GetDataService } from '../services/get-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products!: Product[];

  constructor(private getData: GetDataService) {}
  ngOnInit() {
    this.getData.getProducts().subscribe((res: any) => this.products=res.products
    );
  }
}
