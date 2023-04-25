import { ProductDto } from './../Classes/product-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../Classes/product';
import { MyResponse } from '../Classes/Myresponse';
import { MatPaginator } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class ShopService
{
  @ViewChild(MatPaginator, { static: true })paginator!: MatPaginator;


  FirstPage:Product[]=[]
  products:Product[]=
  [
   /* {
      image: "core i5.jpg",
      name:"core i5",
      price:6400,
      quantity:0,
      category:'Processor'

      }
      ,
      {
        image: "ram1.png",
        name:"AORUS RGB Memory DDR4 16GB (2x8GB) ",
        price:3000,
        quantity:0,
        category:'RAM'

      }
      ,
      {
        image: "gpu1.jpg",
        name:"GIGABYTE AORUS GeForce RTX 4080 16GB MASTER",
        price:5700,
        quantity:0,
        category:'GPU'

      }*/
   ];
   filteredProducts:Product[]=[];

   EndPointProducts:MyResponse<ProductDto>=new MyResponse<ProductDto>();

  constructor(public HTTP:HttpClient)
  {

  }

  ApiUrl='https://localhost:7202/api/';
  GetAllProducts():Observable<MyResponse<ProductDto>>
  { var api = this.ApiUrl+'Products/GetAllProducts';
    return this.HTTP.get<MyResponse<ProductDto>>(api);
  }

  ShopProductsFilter(Category:string)
  {
    this.filteredProducts=this.products
    this.paginator.length=this.filteredProducts.length;
    if(Category=='All')
    {
      this.filteredProducts=this.filteredProducts.slice(0,9)
    }
    else
    {
    this.filteredProducts= this.filteredProducts.filter((x)=>{return x.category.name===Category});
    this.paginator.length=this.filteredProducts.length;
    }
  }
}
