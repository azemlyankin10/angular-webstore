import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() cardData: IProduct = {
    title: '',
    category: '',
    description: '',
    id: 0,
    image: '',
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    },
  };
}
