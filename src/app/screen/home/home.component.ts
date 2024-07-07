import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeroBannerComponent } from '../../layouts/hero-banner/hero-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  public loop = true;
  public slidesPerView = 2;

  images = [
    {
      imageUrl: 'https://eazyplus.com.np/milk_formula_2.png',
      title: 'Milk Formula 2',
    },
    {
      imageUrl: 'https://eazyplus.com.np/milk_formula_3.png',
      title: 'Milk Formula 3',
    },
    {
      imageUrl: 'https://eazyplus.com.np/milk_formula_4.png',
      title: 'Milk Formula 4',
    },
    {
      imageUrl: 'https://eazyplus.com.np/milk_formula_5.png',
      title: 'Milk Formula 5',
    },
  ];
}
