import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces';
import { ProductsService } from 'src/app/servises/products.service';
import Swiper, { Navigation, SwiperOptions } from 'swiper';

@Component({
    templateUrl: './details-category.component.html',
    styleUrls: ['./details-category.component.scss'],
})
export class DetailsCategoryComponent implements OnInit, AfterViewInit {
    constructor(
        private route: ActivatedRoute,
        private productService: ProductsService
    ) {}

    isLoading = true;
    title = '';
    data: IProduct[] = [];
    caruselData: IProduct[] = [];

    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            const id = params.get('id');
            if (id) {
                this.title = id;
                this.productService
                    .getCategoryData(id)
                    .subscribe((products) => {
                        this.data = products;
                        this.isLoading = false;
                    });
            }
        });

        this.productService.getAllProducts().subscribe((products) => {
            this.caruselData = products;
        });
    }

    ngAfterViewInit(): void {
        const swiperOptions: SwiperOptions = {
            slidesPerView: 5,
            spaceBetween: 20,
            slidesPerGroup: 3,
            navigation: {
                prevEl: '.btn-back',
                nextEl: '.btn-forward',
            },
        };
        Swiper.use([Navigation]);
        new Swiper('.swiper-container', swiperOptions);
    }
}
