import { ShopProduct } from './../Classes/ShopProduct';
import { Injectable } from '@angular/core';
import { ShopService } from './shop.service';
import { RecommendedProduct } from '../Classes/recommended-product';
import { RecommendationBundles } from '../Classes/recommendation-bundles';

const { localStorage } = window;

@Injectable({
  providedIn: 'root'
})
export class ShopSingleService {

  RelatedProducts:ShopProduct[]=[];
  
  RecommendedProducts:RecommendedProduct[]=[];

  product:any;

  constructor(public ShopSrv:ShopService)
   {
    const productstring=localStorage.getItem('product');
    if(productstring!=null)
    {
    this.product=JSON.parse(productstring);
    
    }
    this.SelectRelatedProducts(this.product);
    this.RecommendedProducts=this.RecommendProducts(this.ShopSrv.products)
   }

  SelectRelatedProducts(product:ShopProduct)
{
  if(this.product.image!=null)
  {
  var data=this.ShopSrv.products;
  data=data.filter((p)=>{return p.category.name==product.category.name && p.name!=product.name});
  this.RelatedProducts=data.slice(0,9);
  }
}

  RecommendProducts(arr: ShopProduct[]):RecommendedProduct[]
  {
    var data = arr.filter((p)=>{return p.name!=this.product.name});
    var shuffled = data.sort(() => 0.5 - Math.random()).map(
      (product: ShopProduct) => {
        var recommendedProduct = new RecommendedProduct();
        recommendedProduct.category = product.category;
        recommendedProduct.name = product.name;
        recommendedProduct.price = product.price;
        recommendedProduct.description = product.description;
        recommendedProduct.imageUrl = product.imageUrl;
        recommendedProduct.quantity = product.quantity;
        return recommendedProduct;
      }
    );
    return shuffled.slice(0, 4);   
  }
}
