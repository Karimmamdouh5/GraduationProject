import { Component } from '@angular/core';
import { Category } from 'src/app/Classes/category';
import { Product } from 'src/app/Classes/product';
import { ShopSingleService } from 'src/app/Services/shop-single.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent {

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
    ,
    {
        /*Image: "gpu1.jpg",
        NAME:"GIGABYTE AORUS GeForce RTX 4080 16GB MASTER",
        Price:"57000"*/
        image: "gpu1.jpg",
        name:"GIGABYTE AORUS GeForce RTX 4080 16GB MASTER",
        price:57000,
        description:``,
        quantity:0,
        category:new Category()
    }
    ,
    {
        /*
        Image: "gpu1.jpg",
        NAME:"GIGABYTE AORUS GeForce RTX 4080 16GB MASTER",
        Price:"57000"
        */

        image: "gpu1.jpg",
        name:"GIGABYTE AORUS GeForce RTX 4080 16GB MASTER",
        price:57000,
        description:``,
        quantity:0,
        category:new Category()
    }
    ,
    {
      /*
      Image: "gpu1.jpg",
      NAME:"GIGABYTE AORUS GeForce RTX 4080 16GB MASTER",
      Price:"57000"
      */

      image: "gpu1.jpg",
      name:"Test",
      price:57000,
      description:``,
      quantity:0,
      category:new Category()
    }
    ,
    {
    /*
    Image: "gpu1.jpg",
    NAME:"GIGABYTE AORUS GeForce RTX 4080 16GB MASTER",
    Price:"57000"
    */

    image: "gpu1.jpg",
    name:"Test",
    price:57000,
    description:``,
    quantity:0,
    category:new Category()
    }
    ,
    {
      /*
      Image: "gpu1.jpg",
      NAME:"GIGABYTE AORUS GeForce RTX 4080 16GB MASTER",
      Price:"57000"
      */

      image: "gpu1.jpg",
      name:"Test",
      price:57000,
      description:``,
      quantity:0,
      category:new Category()
    }];

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
