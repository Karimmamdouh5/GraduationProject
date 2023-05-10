import { Component } from '@angular/core';
import { ShopSingleService } from 'src/app/Services/shop-single.service';
import { ShopService } from 'src/app/Services/shop.service';

@Component({
  selector: 'app-shop-single-page',
  templateUrl: './shop-single-page.component.html',
  styleUrls: ['./shop-single-page.component.scss']
})
export class ShopSinglePageComponent {
  constructor(public ShopSingleSrv:ShopSingleService,public ShopSrv:ShopService)
  {
    this.ShopSingleSrv.RecommendedProducts=this.ShopSingleSrv.RecommendProducts(this.ShopSrv.products);
  }

}
