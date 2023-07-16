import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/models/Product';
import { ProductService } from '../../core/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  constructor(private _productservice: ProductService, private router: Router) {}

  ngOnInit(): void {}

  addProduct() {
    let listSize = 0;
    let lastId;
    this._productservice.getProducts().subscribe((response)=>{
      if(response?.length){
        listSize = response.length
        lastId = response[listSize-1].id;
        this.product.id = lastId + 1;
        this.product.like = 0;
        this._productservice.postProduct(this.product).subscribe(_=>{
          this.router.navigate([`/details/${this.product.id}`]);
        });
      }
    });

  }
}
