import { CartService } from 'src/app/Services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopProductsComponent {
  products=
  [
    {
      Image: "core i5.jpg",
      NAME:"core i5",
      Price:6400,
      Quantity:0
      }
      ,
      {
        Image: "ram1.png",
        NAME:"AORUS RGB Memory DDR4 16GB (2x8GB) ",
        Price:3000,
        Quantity:0

      }
      ,
      {
        Image: "gpu1.jpg",
        NAME:"GIGABYTE AORUS GeForce RTX 4080 16GB MASTER",
        Price:5700,
        Quantity:0

      }
   ];
  constructor(public CartSrv:CartService)
  {

  }

}
