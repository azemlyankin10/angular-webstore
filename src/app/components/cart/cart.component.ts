import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/servises/products.service';

interface ICartData extends IProduct {
  quantity: number;
}

export interface IApiCartData {
  productId: number;
  quantity: number;
}

export interface IRootApiCartData {
  id: number;
  userId: number;
  date: Date;
  products: IApiCartData[];
  __v: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  data: ICartData[] = [];

  ngOnInit() {
    this.productService.getCart('1').subscribe((data) => {
      this.data = this.dataHandler(data);
    });
  }

  removeElemInCart(id: number) {
    this.productService.removeFromCart(id);

    // display array widthout deleted elem
    this.data = this.data.filter((el) => el.id !== id);
  }

  private dataHandler(cart: IRootApiCartData) {
    const productsIndexes = cart.products;

    const newData: ICartData[] = [];
    for (let el of productsIndexes) {
      this.productService
        .getProduct(el.productId.toString())
        .subscribe((card) => {
          newData.push({ ...card, quantity: el.quantity });
        });
    }

    return newData;
  }
}
