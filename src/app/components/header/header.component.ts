import { Component } from '@angular/core';
import { ProductsService } from 'src/app/servises/products.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private productService: ProductsService) {}

    categories = this.productService.getCategoryTypes();
}
