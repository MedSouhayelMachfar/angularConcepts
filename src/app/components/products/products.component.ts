import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/models/Product';
import { ProductService } from '../../core/services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  prixMax: number;
  records: Product[] = [];
  headers: { key: keyof Product; label: string }[] = [];

  constructor(private _productService: ProductService) {}

  likeProduct(p: Product) {
    p.like++;
    this.updateProduct(p);
  }

  buyProduct(p: Product) {
    p.quantity--;
    this.updateProduct(p);
  }

  addFiveItems(p: Product) {
    p.quantity+=5;
    this.updateProduct(p);
  }

  updateProduct(p: Product){
    this._productService.updateProductById(p).subscribe({
      next: (value)=>{
        this.records.forEach((elem, index) => {
          if (elem.id === value.id) {
            this.records[index] = value;
            return;
          }
        });
      }
    })
  }

  fetchProducts(){
    this._productService.getProducts().subscribe((response) => {
      if (response?.length) {
        this.headers = Object.keys(response[0]).map((key) => {
          const recordProperties = key as keyof Product;
          return {
            key: recordProperties,
            label: key.toUpperCase(),
          };
        });
        this.records = response;
      }
    });
  }
  ngOnInit(): void {
    this.fetchProducts();
  }
}
