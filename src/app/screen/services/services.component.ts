import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  ourServices = [
    {
        title: "Supply Management of Medical and Surgical Products",
        description: "We specialize in efficient supply chain management, ensuring timely delivery of high-quality medical and surgical products to healthcare institutions."
    },
    {
        title: "Sales and Marketing of Medicines, Lab, and Surgical Products",
        description: "Our expert team handles the sales and marketing of a wide range of medicines, laboratory equipment, and surgical products, ensuring widespread availability and accessibility."
    },
    {
        title: "Import and Distribution of Medical Products",
        description: "We import and distribute cutting-edge medical products, facilitating access to advanced healthcare solutions across Nepal."
    },
    {
        title: "Consultancy Services for Healthcare Institutions",
        description: "We provide consultancy services to healthcare institutions, offering strategic advice and solutions to optimize operations and enhance patient care."
    },
    {
        title: "Training and Education Programs",
        description: "We conduct training and education programs for healthcare professionals, empowering them with the latest knowledge and skills in medical practices and technologies."
    },
    {
        title: "Customized Healthcare Solutions",
        description: "We design and implement customized healthcare solutions tailored to meet specific needs and challenges faced by healthcare providers."
    }
];

}
