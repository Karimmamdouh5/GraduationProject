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
      Header1:'intel core i9',
      Header2:'Ullamco laboris nisi ut ',
      Description:'Intel Core i9 13900 24 Cores 32 Threads - Max Turbo 5.6GHz - 36MB Cache - LGA 1700 Socket - 13th Gen Raptor Lake',
      image:'https://live.staticflickr.com/65535/52756886029_c88b750542_w.jpg'
      },
      {
      Header1:'Gigabyte B450M S2H',
      Header2:'Ullamco laboris nisi ut ',
      Description:'Gigabyte B450M S2H , includes USB 3.1 Gen 1 and USB 2.0 ports , also features Realtek Gigabit Ethernet LAN, 802.11ac Wi-Fi and Bluetooth 4.2 for networking.',
      image:'https://live.staticflickr.com/65535/52757045665_debcddb3fa_w.jpg'
      },
      {
      Header1:'B550 AORUS PRO AX',
      Header2:'Ullamco laboris nisi ut ',
      Description:'Aorus RTX 3060 Elite 12G DDR6',
      image:'https://live.staticflickr.com/65535/52757045655_1e7a3eb870_w.jpg'
      },
    ]
}
