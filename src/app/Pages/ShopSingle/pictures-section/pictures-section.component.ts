import { Component } from '@angular/core';
import { ShopSingleService } from 'src/app/Services/shop-single.service';

@Component({
  selector: 'app-pictures-section',
  templateUrl: './pictures-section.component.html',
  styleUrls: ['./pictures-section.component.scss']
})
export class PicturesSectionComponent {

  constructor(public ShopSingleSrv:ShopSingleService){}

}
