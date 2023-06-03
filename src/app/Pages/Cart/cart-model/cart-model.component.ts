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
  CreditpanelOpenState = false;
  Months=[1,2,3,4,5,6,7,8,9,10,11,12];
  Years:number[]=[];
constructor(public router:Router,public CartSrv:CartService)
{
  var CurrentYear = new Date().getFullYear();
  for (let index = 0; index < 11; index++) {
    this.Years.push(CurrentYear+index)
  }
  console.log(this.Years);
  
}
Navigation(route:string)
{
this.router.navigate(['/',route])
}

}
