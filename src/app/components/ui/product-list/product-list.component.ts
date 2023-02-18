import { Component } from '@angular/core';
import { ProductsService } from 'src/app/servises/products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
    constructor(private productServise: ProductsService) {}

    categories = this.productServise.getCategoryTypes().map((el) => {
        switch (el.name) {
            case 'electronics':
                return {
                    ...el,
                    img: 'https://www.apple.com/euro/iphone/home/j/screens_alt/images/meta/iphone__ky2k6x5u6vue_og.png',
                };
            case 'jewelery':
                return {
                    ...el,
                    img: 'https://cdn.shopify.com/s/files/1/0635/0526/8968/files/shopify-jewelry-watches-01_777x.jpg?v=1665625050',
                };
            case "men's clothing":
                return {
                    ...el,
                    img: 'https://www.egypte-market.com/wp-content/uploads/2021/02/men-clothing-category.jpeg',
                };
            case "women's clothing":
                return {
                    ...el,
                    img: 'https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=612x612&w=0&k=20&c=fUpcbOITkQqitglZfgJkWO3py-jsbuhc8eZfb4sdrfE=',
                };
            default:
                return { ...el, img: '' };
        }
    });
}
