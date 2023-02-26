import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from '../Classes/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  /*

    {
      Image: "core i5.jpg",
      NAME:"core i5",
      Price:"6400"
      }
      ,
      {
        Image: "ram1.png",
        NAME:"AORUS RGB Memory DDR4 16GB (2x8GB) ",
        Price:"3000"
      }
      ,
      {
        Image: "gpu1.jpg",
        NAME:"GIGABYTE AORUS GeForce RTX 4080 16GB MASTER",
        Price:"57000"
      }

  */

CartItems:Product[]=[];
TotalPrice=0;

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

}

