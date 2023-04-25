import { RecommendationBundles } from './../../../../Classes/recommendation-bundles';
import { Product } from './../../../../Classes/product';
import { CartService } from 'src/app/Services/cart.service';
import { BundelsRecommendationService } from './../../../../Services/bundels-recommendation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendation-bundles',
  templateUrl: './recommendation-bundles.component.html',
  styleUrls: ['./recommendation-bundles.component.scss']
})
export class RecommendationBundlesComponent
{
  constructor(public RecombundelsSrv:BundelsRecommendationService,public CartSrv:CartService)
  {}
Product:Product= new Product();

Recommend(Purpose:string,DeviceType:string)
{
this.RecombundelsSrv.purpose=Purpose;
this.RecombundelsSrv.DeviceType=DeviceType;
this.RecombundelsSrv.Recommend(this.RecombundelsSrv.purpose,this.RecombundelsSrv.DeviceType);
}
AddToCart(item:RecommendationBundles)
{
  this.Product.name=item.Name;
  this.Product.price=item.Price;
  this.Product.image=item.Image;
  this.CartSrv.addToCart(this.Product,1);
  this.Product=new Product();
}
}
