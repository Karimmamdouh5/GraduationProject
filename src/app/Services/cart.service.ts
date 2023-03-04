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
  items=items.filter((x)=>{return x.NAME===Prod.NAME})
  if(items.length==0)
  {
    Prod.Quantity=Qty
    this.CartItems.push(Prod);
    this.TotalPrice=this.TotalPrice+Prod.Price
  }
  else
  {
    this.CartItems[this.CartItems.indexOf(Prod)].Quantity=this.CartItems[this.CartItems.indexOf(Prod)].Quantity+Qty;
    this.TotalPrice=this.TotalPrice+Prod.Price
  }
}

getItems():Product[] {
  return this.CartItems;
}

DeleteItem(Prod:Product)
{
this.CartItems=this.CartItems.filter((x)=>{return x.NAME!=Prod.NAME});
this.TotalPrice=this.TotalPrice-(Prod.Quantity*Prod.Price);
}

IncreaseItemQuantity(Prod:Product)
{
  this.CartItems[this.CartItems.indexOf(Prod)].Quantity=this.CartItems[this.CartItems.indexOf(Prod)].Quantity+1;
  this.TotalPrice=this.TotalPrice+Prod.Price;
}

DecreaseItemQuantity(Prod:Product)
{
  this.CartItems[this.CartItems.indexOf(Prod)].Quantity=this.CartItems[this.CartItems.indexOf(Prod)].Quantity-1;
  this.TotalPrice=this.TotalPrice-Prod.Price;
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

