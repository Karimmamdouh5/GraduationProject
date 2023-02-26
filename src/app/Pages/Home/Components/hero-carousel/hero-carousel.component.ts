import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss']
})
export class HeroCarouselComponent
{
    Slides=[
      {
      Header1:'intel core i5',Header2:'Ullamco laboris nisi ut ',
      Description:'We bring you 100% free CSS templates for your websites . If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website Thank you',
      image:'core i5.jpg'
      },
      {
      Header1:'AMD RADEON RX 6900 XT',Header2:'Ullamco laboris nisi ut ',
      Description:'We bring you 100% free CSS templates for your websites . If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website Thank you',
      image:'GPU.jpg'
      },
      {
      Header1:'B550 AORUS PRO AX',Header2:'Ullamco laboris nisi ut ',
      Description:'We bring you 100% free CSS templates for your websites . If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website Thank you',
      image:'motherboard.png'
      },
    ]
}
