import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroBannerComponent {
  public loop = true;
}
