import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/models/Product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  idParam: string = '';
  product: Product;
  constructor(
    private _productservice: ProductService,
    private _activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.idParam = this._activatedRoute.snapshot.params['id'];
    this._productservice.getProductById(this.idParam).subscribe({
      next: (x) => {
        this.product = x;
      },
      error: (err) => {
        this.router.navigate(['/products']);
      },
    });
  }
}
