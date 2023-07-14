import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  prixMax: number;
  records: any[] = [];
  headers: {key:string,label:string}[];

  constructor(private _productService: ProductService) {}

  dec(id: number) {
    this.records.forEach((elem, index) => {
      if (elem.id === id) {
        this.records[index].quantity--;
        return;
      }
    });
  }
  inc(id: number) {
    this.records.forEach((elem, index) => {
      if (elem.id === id) {
        this.records[index].like++;
        return;
      }
    });
  }
  ngOnInit(): void {
    this._productService.getProducts().subscribe((response)=>{
      this.records = response;
    });

    this.headers = [
      { key: 'id', label: 'ID' },
      { key: 'title', label: 'TITLE' },
      { key: 'price', label: 'PRICE' },
      { key: 'quantity', label: 'QUANTITY' },
      { key: 'like', label: 'LIKES' },
    ];
  }
}
