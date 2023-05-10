import { Product } from './../Classes/product';
import { Injectable } from '@angular/core';
import { ShopService } from './shop.service';
import { RecommendedProduct } from '../Classes/recommended-product';

@Injectable({
  providedIn: 'root'
})
export class ShopSingleService {

  RelatedProducts:Product[]=[];
  
  RecommendedProducts:RecommendedProduct[]=[];

  product:Product=new Product();
  constructor(public ShopSrv:ShopService) { }

  SelectRelatedProducts(product:Product)
{
  var data=this.ShopSrv.products;
  data=data.filter((p)=>{return p.category.name==product.category.name && p.name!=product.name});
  this.RelatedProducts=data.slice(0,9);
}

RecommendProducts(arr: Product[]):RecommendedProduct[]
{
  var data = arr.filter((p)=>{return p.name!=this.product.name});
  var shuffled = data.sort(() => 0.5 - Math.random()).map(
    (product: Product) => {
      var recommendedProduct = new RecommendedProduct();
      recommendedProduct.category = product.category;
      recommendedProduct.name = product.name;
      recommendedProduct.price = product.price;
      recommendedProduct.description = product.description;
      recommendedProduct.image = product.image;
      recommendedProduct.quantity = product.quantity;
      return recommendedProduct;
    }
  );
  return shuffled.slice(0, 4);   
}
}
