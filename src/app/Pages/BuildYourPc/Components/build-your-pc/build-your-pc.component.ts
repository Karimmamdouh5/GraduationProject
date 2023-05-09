import { Product } from './../../../../Classes/product';
import { Component } from '@angular/core';
import { Builtpc } from 'src/app/Classes/builtpc';
import { ShopService } from 'src/app/Services/shop.service';

@Component({
  selector: 'app-build-your-pc',
  templateUrl: './build-your-pc.component.html',
  styleUrls: ['./build-your-pc.component.scss']
})
export class BuildYourPcComponent
{

MainComponents=['Processor','Motherboard','GPU','Power supply','Ram','Storage','Case','Monitor','Cooler'];

maintrial:any=[/*{name:'processor',itemname:'xxxx',itemprice:0}*/];
Pc:Builtpc=new Builtpc();

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
  console.log(Category);
  
  var arr=this.ShopSrv.products;
  if(Text=='')
  {
    this.Products=arr.filter((x)=>{return x.category.name.toUpperCase().trim()==Category.toUpperCase().trim()});
  }
  if(Text!=''||Text!=null)
  {
    console.log(this.SearchText);

    this.Products=arr.filter((x)=>{return x.category.name.toUpperCase().trim()==Category.toUpperCase().trim() && x.name.toUpperCase().trim().includes(Text.toUpperCase().trim())});
  }
 }

 Binding(item:Product)
 {
  item.quantity=1;
  this.Pc.ProductsList.push(item);
  console.log(this.Pc);
  var obj = {name:item.category.name,itemname:item.name,itemprice:item.price};
  this.maintrial.push(obj);
 }
}
