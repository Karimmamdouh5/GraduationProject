import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../Classes/product';
import { CartSnackBarComponent } from '../Pages/Shop/Components/cart-snack-bar/cart-snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor( public _snackBar: MatSnackBar)
  {

  }

CartItems:Product[]=[];
TotalPrice=0;
durationInSeconds = 1;


addToCart(Prod:Product,Qty:number)
{
  var items=this.CartItems;
  items=items.filter((x)=>{return x.name===Prod.name})
  if(items.length==0)
  {
    Prod.quantity=Qty
    this.CartItems.push(Prod);
    this.TotalPrice=this.TotalPrice+Prod.price
  }
  else
  {
    this.CartItems[this.CartItems.indexOf(Prod)].quantity=this.CartItems[this.CartItems.indexOf(Prod)].quantity+Qty;
    this.TotalPrice=this.TotalPrice+Prod.price
  }
}

addRangeToCart(prods:Product[])
{
  prods.forEach(item=>
    {
      this.addToCart(item,1);
    });
}
getItems():Product[] {
  return this.CartItems;
}

DeleteItem(Prod:Product)
{
this.CartItems=this.CartItems.filter((x)=>{return x.name!=Prod.name});
this.TotalPrice=this.TotalPrice-(Prod.quantity*Prod.price);
}

IncreaseItemQuantity(Prod:Product)
{
  this.CartItems[this.CartItems.indexOf(Prod)].quantity=this.CartItems[this.CartItems.indexOf(Prod)].quantity+1;
  this.TotalPrice=this.TotalPrice+Prod.price;
}

DecreaseItemQuantity(Prod:Product)
{
  this.CartItems[this.CartItems.indexOf(Prod)].quantity=this.CartItems[this.CartItems.indexOf(Prod)].quantity-1;
  if(this.CartItems[this.CartItems.indexOf(Prod)].quantity==0)
  {
    this.DeleteItem(Prod);
  }
  this.TotalPrice=this.TotalPrice-Prod.price;
}

clearCart() {
  this.CartItems = [];
  return this.CartItems;
}

openSnackBar()
{
  this._snackBar.openFromComponent(CartSnackBarComponent, {
    duration: this.durationInSeconds * 1000,
  });
}
}

