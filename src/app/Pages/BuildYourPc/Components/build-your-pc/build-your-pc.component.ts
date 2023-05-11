import { Product } from './../../../../Classes/product';
import { Component } from '@angular/core';
import { Builtpc } from 'src/app/Classes/builtpc';
import { LookupDto } from 'src/app/Classes/lookup-dto';
import { ShopService } from 'src/app/Services/shop.service';

@Component({
  selector: 'app-build-your-pc',
  templateUrl: './build-your-pc.component.html',
  styleUrls: ['./build-your-pc.component.scss']
})
export class BuildYourPcComponent
{

//MainComponents=['Processor','Motherboard','GPU','Power supply','Ram','Storage','Case','Monitor','Cooler'];

maintrial:any=[/*{name:'processor',itemname:'xxxx',itemprice:0}*/];
Pc:Builtpc=new Builtpc();

Products:Product[]=[];

SearchText='';



constructor(public ShopSrv:ShopService)
{
  this.ShopSrv.products=[]
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

    this.ShopSrv.ListOfCategories().subscribe(x=>{this.ShopSrv.ProductsCategories=x.data});
    
    this.Filter();

}
Filter()
{
  /*Category:string,Text:string*/ 
  for (const category of this.ShopSrv.ProductsCategories) {
    category.products = this.ShopSrv.products.filter(product => product.category.name === category.name);
  }
/*  var arr=this.ShopSrv.products;
  if(Text=='')
  {
    console.log('text is empty');
    
    this.Products=arr.filter((x)=>{return x.category.name.toUpperCase().trim()==Category.toUpperCase().trim()});
    console.log(this.Products);
    
  }
  if(Text!=''&&Text!=undefined)
  {
    console.log('text is not empty');

    this.Products=arr.filter((x)=>{return x.category.name.toUpperCase().trim()==Category.toUpperCase().trim() && x.name.toUpperCase().trim().includes(Text.toUpperCase().trim())});
  }
  */
 }

 FilterByText(category:LookupDto,Text:string)
 {
  if(Text==''||Text==null)
  {
    this.Filter();
  }
  else
  {
    category.products=category.products.filter((p)=>{return p.name.trim().toUpperCase().includes(Text.trim().toUpperCase())});
  }
    //this.ShopSrv.ProductsCategories[this.ShopSrv.ProductsCategories.indexOf(this.ShopSrv.ProductsCategories.filter((p)=>{return p.name==category.name})[0])]=category;
 }
 Binding(item:Product)
 {  
  var existitem=this.maintrial.filter((i: { name: string; })=>{return i.name.trim().toUpperCase()==item.category.name.trim().toUpperCase()});  
  if(existitem.length!=0)
  {
   this.maintrial[this.maintrial.indexOf(existitem[0])]={name:item.category.name,itemname:item.name,itemprice:item.price};   
   this.Pc.ProductsList[this.Pc.ProductsList.indexOf(this.Pc.ProductsList.filter((i)=>{return i.category.name.trim().toUpperCase()==item.category.name.trim().toUpperCase()})[0])]=item;
  }
  else
  {
  item.quantity=1;
  this.Pc.ProductsList.push(item);
  var obj = {name:item.category.name,itemname:item.name,itemprice:item.price};
  this.maintrial.push(obj);
  }
 }
}
