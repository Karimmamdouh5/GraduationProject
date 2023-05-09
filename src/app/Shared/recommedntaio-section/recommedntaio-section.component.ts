import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Classes/category';
import { Product } from 'src/app/Classes/product';
import { ShopSingleService } from 'src/app/Services/shop-single.service';

@Component({
  selector: 'app-recommedntaio-section',
  templateUrl: './recommedntaio-section.component.html',
  styleUrls: ['./recommedntaio-section.component.scss']
})
export class RecommedntaioSectionComponent
{
  products:Product[]=[
    {
    /*Image: "core i5.jpg",
    NAME:"core i5",
    Price:"6400"*/
    image: "core i5.png",
    name:"core i5",
    price:6400,
    description:``,
    quantity:0,
    category:new Category()
    }
    ,
    {
      /*Image: "ram1.png",
      NAME:"AORUS RGB Memory DDR4 16GB (2x8GB) ",
      Price:"3000"*/
      image: "ram1.png",
      name:"AORUS RGB Memory DDR4 16GB (2x8GB)",
      price:3000,
      description:``,
      quantity:0,
      category:new Category()
    }
];

forwardDisable=false;
BackwardDisable=false;
ViewProducts:Product[]=[]

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

NavigateToShopSingle(product:Product)
{
    this.ShopSingleSrv.product=product;
    this.router.navigate(['/ShopSingle']);
}

}
