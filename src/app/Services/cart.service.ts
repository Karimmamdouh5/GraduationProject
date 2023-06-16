import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShopProduct } from '../Classes/ShopProduct';
import { CartSnackBarComponent } from '../Pages/Shop/Components/cart-snack-bar/cart-snack-bar.component';
import { Builtpc } from '../Classes/builtpc';
import { MyResponse } from '../Classes/Myresponse';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddOrderRequest } from '../Classes/add-order-request';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor( public _snackBar: MatSnackBar,public Http:HttpClient)
  {

  }


ApiUrl='https://localhost:7078/api';
//ApiUrl='http://gradprojbackend3-001-site1.atempurl.com/api';

CartItems:ShopProduct[]=[];
TotalPrice=0;
durationInSeconds = 1;
CartStepperDisplay='none';


addToCart(Prod:any,Qty:number)
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

addRangeToCart(prods:ShopProduct[])
{
  prods.forEach(item=>
    {
      this.addToCart(item,1);
    });
}
getItems():ShopProduct[] {
  return this.CartItems;
}

DeleteItem(Prod:ShopProduct)
{
this.CartItems=this.CartItems.filter((x)=>{return x.name!=Prod.name});
this.TotalPrice=this.TotalPrice-(Prod.quantity*Prod.price);
}

IncreaseItemQuantity(Prod:ShopProduct)
{
  this.CartItems[this.CartItems.indexOf(Prod)].quantity=this.CartItems[this.CartItems.indexOf(Prod)].quantity+1;
  this.TotalPrice=this.TotalPrice+Prod.price;
}

DecreaseItemQuantity(Prod:ShopProduct)
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

OrderSubmit(Model:AddOrderRequest):Observable<MyResponse>
{
  console.log(Model);
  
  return this.Http.post<MyResponse>(this.ApiUrl+'/Orders/AddOrder',Model);
}

}

