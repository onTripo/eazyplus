import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutUsComponent {
  public loop = true;
  public slidesPerView = 3;

  teams = [
    {
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: "Krishna Raj Dhungana",
      title: "Founder, Eazy Plus"
    },
    {
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: "Krishna Raj Dhungana",
      title: "Founder, Eazy Plus"
    }, 
    {
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: "Krishna Raj Dhungana",
      title: "Founder, Eazy Plus"
    },
    {
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: "Krishna Raj Dhungana",
      title: "Founder, Eazy Plus"
    }, 
    {
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: "Krishna Raj Dhungana",
      title: "Founder, Eazy Plus"
    }
  ]

}
