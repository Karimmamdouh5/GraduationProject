import { Component, OnInit } from '@angular/core';
import { ShopSingleService } from 'src/app/Services/shop-single.service';
import { ShopService } from 'src/app/Services/shop.service';
const { localStorage } = window;

@Component({
  selector: 'app-shop-single-page',
  templateUrl: './shop-single-page.component.html',
  styleUrls: ['./shop-single-page.component.scss']
})
export class ShopSinglePageComponent implements OnInit {
  constructor(public ShopSingleSrv:ShopSingleService,public ShopSrv:ShopService)
  {
    this.ShopSingleSrv.RecommendedProducts=this.ShopSingleSrv.RecommendProducts(this.ShopSrv.products);

  }
  ngOnInit(): void {
    console.log(this.ShopSrv.products)
    this.ShopSingleSrv.RecommendedProducts=this.ShopSingleSrv.RecommendProducts(this.ShopSrv.products);

  }

}
