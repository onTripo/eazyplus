import { Routes } from '@angular/router';
import { HomeComponent } from './screen/home/home.component';
import { AboutUsComponent } from './screen/about-us/about-us.component';
import { ContactUsComponent } from './screen/contact-us/contact-us.component';
import { ProductsComponent } from './screen/products/products.component';
import { ServicesComponent } from './screen/services/services.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    // {path: 'products', component: ProductsComponent},
    {path: 'services', component: ServicesComponent},
    {path: '**', redirectTo: ''}
];
