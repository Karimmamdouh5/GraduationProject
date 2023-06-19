import { Component } from '@angular/core';
import { Category } from 'src/app/Classes/category';
import { ShopProduct } from 'src/app/Classes/ShopProduct';
import { ShopSingleService } from 'src/app/Services/shop-single.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent {

  products:ShopProduct[]=
  [
    {
      imageUrl: "https://live.staticflickr.com/65535/52756886029_c88b750542_w.jpg",
      name:"intel core i9",
      price:6400,
      description:``,
      quantity:0,
      category:new Category()
    }
    ,
    {
      imageUrl: "https://live.staticflickr.com/65535/52756886009_0c5a08410f_w.jpg",
      name:"TEAM PC DARK 8G",
      price:850,
      description:``,
      quantity:0,
      category:new Category()
    }
    ,
    {
      imageUrl: "https://live.staticflickr.com/65535/52757045665_debcddb3fa_w.jpg",
      name:"Gigabyte B450M S2H",
      price:2800,
      description:``,
      quantity:0,
      category:new Category()
    }
    ,
    {

      imageUrl: "https://live.staticflickr.com/65535/52756101147_323babb94b_w.jpg",
      name:"ASUS Cerberus GeForce® GTX 1050 Ti OC Edition",
      price:4500,
      description:``,
      quantity:0,
      category:new Category()
    }
    ,
    {

      imageUrl: "https://live.staticflickr.com/65535/52757124123_91186ae59a_w.jpg",
      name:"Air Cooling Antec A400i",
      price:1100,
      description:``,
      quantity:0,
      category:new Category()
    }
  ];

forwardDisable=false;
BackwardDisable=false;
ViewProducts:ShopProduct[]=[]

constructor(public ShopSingleSrv:ShopSingleService,public router:Router)
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

NavigateToShopSingle(product:ShopProduct)
{
    this.ShopSingleSrv.product=product;
    this.router.navigate(['/ShopSingle']);
}
}
