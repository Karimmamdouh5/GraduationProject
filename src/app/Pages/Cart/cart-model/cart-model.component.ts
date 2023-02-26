import { CartService } from 'src/app/Services/cart.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-model',
  templateUrl: './cart-model.component.html',
  styleUrls: ['./cart-model.component.scss']
})
export class CartModelComponent
{
constructor(public router:Router,public CartSrv:CartService)
{

}
Navigation(route:string)
{
this.router.navigate(['/',route])
}

}
