import { ProductDto } from './../Classes/product-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../Classes/product';
import { MyResponse } from '../Classes/Myresponse';
import { MatPaginator } from '@angular/material/paginator';
import { LookupDto } from '../Classes/lookup-dto';
import { Category } from '../Classes/category';

const { localStorage } = window;

@Injectable({
  providedIn: 'root'
})
export class ShopService
{
  @ViewChild(MatPaginator, { static: true })paginator!: MatPaginator;

   FirstPage:Product[]=[]
   products:Product[]=[];
   filteredProducts:Product[]=[];
   ProductsCategories:LookupDto[]=[];
   Category='';
   SearchText='';
   EndPointProducts:MyResponse<ProductDto>=new MyResponse<ProductDto>();
   ApiUrl='https://localhost:7202/api/';

  constructor(public HTTP:HttpClient)
  {
    if(this.products.length==0)
    { var productsString=localStorage.getItem('products');

       if(productsString!=null)
       {
      this.products=JSON.parse(productsString);
       }
    }  }

  GetAllProducts():Observable<MyResponse<ProductDto>>
  {
    var api = this.ApiUrl+'Products/GetAllProducts';
    return this.HTTP.get<MyResponse<ProductDto>>(api);
  }

  ListOfCategories():Observable<MyResponse<LookupDto>>
  {
    var api = this.ApiUrl+'Products/ListOfCategories';
    return this.HTTP.get<MyResponse<LookupDto>>(api);
  }

  ShopProductsFilter(Category:string,SearchText?:string)
  {
    this.Category=Category;
    console.log(SearchText);
    console.log(this.Category);

    this.filteredProducts=this.products
    this.paginator.length=this.filteredProducts.length;

    if(Category!=''&&SearchText!=null)
    {
      this.filteredProducts=this.filteredProducts.filter((x)=>{return x.name.includes(SearchText)&&x.category.name==this.Category});
      this.paginator.length=this.filteredProducts.length;
    }
    if(Category==''&&SearchText!=null)

    {
    this.filteredProducts= this.filteredProducts.filter((x)=>{return x.name.includes(SearchText)});
    this.paginator.length=this.filteredProducts.length;
    }
    else
    {
      this.filteredProducts= this.filteredProducts.filter((x)=>{return x.category.name===Category});
      this.paginator.length=this.filteredProducts.length;
    }
  }

}
