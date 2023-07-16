import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: Product[];

  constructor(private httpClient: HttpClient) {}

  postProduct(p: Product) {
    return this.httpClient
      .post<Product>('http://localhost:3000/products', p)
      .pipe(catchError(this.errorHandler));
  }

  getProducts() {
    return this.httpClient
      .get<Product[]>('http://localhost:3000/products')
      .pipe(catchError(this.errorHandler));
  }

  getProductById(id: string) {
    return this.httpClient
      .get<Product>(`http://localhost:3000/products/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  updateProductById(p: Product) {
    return this.httpClient
      .put<Product>(`http://localhost:3000/products/${p.id}`, p)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
