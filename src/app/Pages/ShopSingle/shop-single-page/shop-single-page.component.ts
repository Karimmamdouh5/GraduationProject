import { Component } from '@angular/core';
import { ShopSingleService } from 'src/app/Services/shop-single.service';

@Component({
  selector: 'app-shop-single-page',
  templateUrl: './shop-single-page.component.html',
  styleUrls: ['./shop-single-page.component.scss']
})
export class ShopSinglePageComponent {
  constructor(public ShopSingleSrv:ShopSingleService){}

}
