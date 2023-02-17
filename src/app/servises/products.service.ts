import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/products';
import { pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  IApiCartData,
  IRootApiCartData,
} from '../components/cart/cart.component';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getCategoryTypes() {
    return [
      { name: 'electronics', path: '/category/electronics' },
      { name: 'jewelery', path: '/category/jewelery' },
      { name: "men's clothing", path: "/category/men's clothing" },
      { name: "women's clothing", path: "/category/women's clothing" },
    ];
  }

  getCategoryData(id: string) {
    return this.http
      .get<IProduct[]>(`https://fakestoreapi.com/products/category/${id}`)
      .pipe(catchError(this.handleError));
  }

  getAllProducts() {
    return this.http
      .get<IProduct[]>('https://fakestoreapi.com/products')
      .pipe(catchError(this.handleError));
  }

  getProduct(id: string) {
    return this.http
      .get<IProduct>(`https://fakestoreapi.com/products/${id}`)
      .pipe(catchError(this.handleError));
  }

  getCart(user: string) {
    return this.http
      .get<IRootApiCartData>(`https://fakestoreapi.com/carts/${user}`)
      .pipe(catchError(this.handleError));
  }

  addToCart(productId: number, quantity: number) {
    const payload = {
      productId: productId,
      quantity: quantity,
    };

    return this.http
      .post('https://fakestoreapi.com/carts', payload)
      .pipe(catchError(this.handleError));
  }

  removeFromCart(itemId: number) {
    this.http
      .delete(`https://fakestoreapi.com/carts/${itemId}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
