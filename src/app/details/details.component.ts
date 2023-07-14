import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  idParam:string = "";
  product: Product;
  constructor(private _productservice: ProductService, private _activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.idParam = this._activatedRoute.snapshot.params['id'];
    this._productservice.getProductById(this.idParam).subscribe((response)=>{
      if(response){
        this.product = response;
      }
    });
  }
}
