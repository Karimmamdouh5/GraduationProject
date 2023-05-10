import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Classes/category';
import { Product } from 'src/app/Classes/product';
import { RecommendedProduct } from 'src/app/Classes/recommended-product';
import { CartService } from 'src/app/Services/cart.service';
import { ShopSingleService } from 'src/app/Services/shop-single.service';
import { ShopService } from 'src/app/Services/shop.service';

@Component({
  selector: 'app-recommedntaio-section',
  templateUrl: './recommedntaio-section.component.html',
  styleUrls: ['./recommedntaio-section.component.scss']
})
export class RecommedntaioSectionComponent
{
products:Product[]=[];
Total=0;
forwardDisable=false;
BackwardDisable=false;
ViewProducts:Product[]=[];

RecommendedProductsCartList:Product[]=[];

constructor(public ShopSingleSrv:ShopSingleService,public CartSrv:CartService,public ShopSrv:ShopService,public router:Router)
{
  this.ViewProducts=this.products.slice(0,3);
  this.BackwardDisable=true;
}

PaginateForward()
{
  this.ViewProducts=this.products.slice((this.products.indexOf(this.ViewProducts[this.ViewProducts.length-1])+1),(this.products.indexOf(this.ViewProducts[this.ViewProducts.length-1])+1)+3);
  this.BackwardDisable=false
  if(((this.products.indexOf(this.ViewProducts[this.ViewProducts.length-1]))+1)==this.products.length)
  {
    this.forwardDisable=true;
  }
}

PaginateBackward()
{
  this.ViewProducts=this.products.slice((this.products.indexOf(this.ViewProducts[0]))-3,this.products.indexOf(this.ViewProducts[0]))
  this.forwardDisable=false;
  if(((this.products.indexOf(this.ViewProducts[0])))==0)
  {
    this.BackwardDisable=true;
  }
}

NavigateToShopSingle(product:Product)
{
    this.ShopSingleSrv.product=product;
    this.router.navigate(['/ShopSingle']);
}

SelectProduct(item:RecommendedProduct)
{
 if(item.isChecked==true)
  {
    this.Total=this.ShopSingleSrv.product.price+this.Total+item.price;
    var prod:Product=new Product();
    prod.category=item.category;
    prod.description=item.description;
    prod.image=item.image;
    prod.name=item.name;
    prod.price=item.price;
    prod.quantity=item.quantity;
    this.RecommendedProductsCartList.push(prod);
    console.log(this.RecommendedProductsCartList);
  }
  else
  {
    this.Total=this.Total-item.price;
    this.RecommendedProductsCartList=this.RecommendedProductsCartList.filter((p)=>{return p.name!=item.name});
    console.log(this.RecommendedProductsCartList);
    
    if(this.Total==this.ShopSingleSrv.product.price)
    {
      this.Total=0;
    }
  }
}

AddProductsToCart()
{
  this.RecommendedProductsCartList.push(this.ShopSingleSrv.product);
  this.CartSrv.addRangeToCart(this.RecommendedProductsCartList);
  console.log(this.RecommendedProductsCartList);
  this.CartSrv.openSnackBar();
}
}