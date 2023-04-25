import { Product } from './../../../../Classes/product';
import { Component } from '@angular/core';
import { ShopService } from 'src/app/Services/shop.service';

@Component({
  selector: 'app-build-your-pc',
  templateUrl: './build-your-pc.component.html',
  styleUrls: ['./build-your-pc.component.scss']
})
export class BuildYourPcComponent
{

MainComponents=['Processor','Motherboard','GPU','Power supply','Ram','Storage','Case','Monitor','Cooler'];



Products:Product[]=[];
SearchText='';
constructor(public ShopSrv:ShopService)
{
  this.ShopSrv.GetAllProducts().subscribe(x=>
    {
      this.ShopSrv.EndPointProducts.data=x.data;
      this.ShopSrv.EndPointProducts.data.forEach(item=>
        {
          var prod : Product= new Product();
          prod.category=x.data[x.data.indexOf(item)].category;
          prod.image=x.data[x.data.indexOf(item)].imageUrl;
          prod.name=x.data[x.data.indexOf(item)].name;
          prod.price=x.data[x.data.indexOf(item)].price;
          prod.quantity=x.data[x.data.indexOf(item)].Quantity;
          prod.description=x.data[x.data.indexOf(item)].description;
          this.ShopSrv.products.push(prod);
        })
        this.Products=this.ShopSrv.products;
    });
}
Filter(Category:string,Text:string)
{
  if(Text=='')
  {
    this.Products=this.ShopSrv.products.filter((x)=>{return x.category.name.toUpperCase()==Category.toUpperCase()});
  }
  if(Text!='')
  {
    console.log(this.SearchText);

    this.Products=this.Products.filter((x)=>{return x.category.name.toUpperCase()==Category.toUpperCase() && x.name.toUpperCase().includes(Text.toUpperCase())});
  }
 }
}
