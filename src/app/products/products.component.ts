import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  prixMax: number;
  records: any[];
  headers: {key:string,label:string}[];

  constructor() {}

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
    this.records = [
      { id: 1, title: 'T-shirt 1', price: 18, quantity: 0, like: 0 },
      { id: 2, title: 'T-shirt 2', price: 21, quantity: 10, like: 0 },
      { id: 3, title: 'T-shirt 3', price: 16, quantity: 8, like: 0 },
      { id: 4, title: 'T-shirt 4', price: 20, quantity: 80, like: 0 },
      { id: 5, title: 'T-shirt 5', price: 11, quantity: 18, like: 0 },
      { id: 5, title: 'T-shirt 5', quantity: 18, like: 0 },
    ];
    this.headers = [
      { key: 'id', label: 'ID' },
      { key: 'title', label: 'TITLE' },
      { key: 'price', label: 'PRICE' },
      { key: 'quantity', label: 'QUANTITY' },
      { key: 'like', label: 'LIKES' },
    ];
  }
}
