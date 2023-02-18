import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsCategoryComponent } from './pages/details-category/details-category.component';
import { DetailsProductComponent } from './pages/details-product/details-product.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'category/:id', component: DetailsCategoryComponent },
    { path: 'product/:id', component: DetailsProductComponent },

    { path: '**', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
