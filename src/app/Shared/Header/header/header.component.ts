import { ShopService } from 'src/app/Services/shop.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent
{
  constructor(public CartSrv:CartService,public router: Router,public ShopSrv:ShopService)
  {

  }

  GetAllShopProducts()
  {
    this.ShopSrv.GetAllProducts();
  }

  Navigation(route:string)
  {
    this.router.navigate(['/',route])
  }
}
