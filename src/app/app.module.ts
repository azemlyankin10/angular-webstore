import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DetailsCategoryComponent } from './pages/details-category/details-category.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailsProductComponent } from './pages/details-product/details-product.component';
import { ProductListComponent } from './components/ui/product-list/product-list.component';
import { RatingComponent } from './components/ui/rating/rating.component';
import { ProductCardComponent } from './components/ui/product-card/product-card.component';
import { LoaderComponent } from './components/ui/loader/loader.component';
import { CartComponent } from './components/cart/cart.component';
import { ModalWindowComponent } from './components/ui/modal-window/modal-window.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DetailsCategoryComponent,
    HomeComponent,
    DetailsProductComponent,
    ProductListComponent,
    RatingComponent,
    ProductCardComponent,
    LoaderComponent,
    CartComponent,
    ModalWindowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
