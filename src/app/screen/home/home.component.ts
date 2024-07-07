import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeroBannerComponent } from '../../layouts/hero-banner/hero-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

  public loop = true;
  public slidesPerView = 2;

  images =  [
   {
     imageUrl: "https://www.bigislandmilk.com/wp-content/uploads/2024/02/1-original-e1709022158319.png"
   },
   {
    imageUrl: "https://www.bigislandmilk.com/wp-content/uploads/2024/02/1-original-e1709022158319.png"
  },
  {
    imageUrl: "https://www.bigislandmilk.com/wp-content/uploads/2024/02/1-original-e1709022158319.png"
  }
  ]

}
