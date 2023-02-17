import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { IProduct } from 'src/app/interfaces/products';
import { ProductsService } from 'src/app/servises/products.service';

@Component({
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss'],
})
export class DetailsProductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  isLoading = true;
  isInCart = false;

  dataCart: IProduct = {
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

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.productService.getProduct(id).subscribe((product) => {
          this.dataCart = product;
          this.isLoading = false;
        });
      }
    });
  }

  addToCart(id: number) {
    this.productService.addToCart(id, 1).subscribe(
      (response) => {
        this.isInCart = true;
        console.log('Product added to cart:', response);
      },
      (error) => {
        console.error('Error adding product to cart:', error);
      }
    );
  }
}
