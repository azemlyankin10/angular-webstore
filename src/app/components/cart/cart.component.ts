import { Component, OnInit } from '@angular/core';
import { ICartData, IRootApiCartData } from 'src/app/interfaces';
import { ProductsService } from 'src/app/servises/products.service';

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

        // display array without deleted elem
        this.data = this.data.filter((el) => el.id !== id);
    }

    private dataHandler(cart: IRootApiCartData) {
        const productsIndexes = cart.products;

        const newData: ICartData[] = [];
        for (const el of productsIndexes) {
            this.productService
                .getProduct(el.productId.toString())
                .subscribe((card) => {
                    newData.push({ ...card, quantity: el.quantity });
                });
        }

        return newData;
    }
}
