import { Component } from '@angular/core';
import { ProductsService } from 'src/app/servises/products.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    constructor(private productServise: ProductsService) {}

    categories = this.productServise.getCategoryTypes();

    currentYear = new Date().getFullYear();
}
