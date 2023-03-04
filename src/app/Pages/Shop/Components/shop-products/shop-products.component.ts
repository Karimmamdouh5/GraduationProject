import { ShopService } from './../../../../Services/shop.service';
import { Product } from './../../../../Classes/product';
import { CartSnackBarComponent } from './../cart-snack-bar/cart-snack-bar.component';
import { CartService } from 'src/app/Services/cart.service';
import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopProductsComponent {

  constructor(public CartSrv:CartService,public _snackBar: MatSnackBar,public ShopSrv:ShopService)
  {

  }

}
