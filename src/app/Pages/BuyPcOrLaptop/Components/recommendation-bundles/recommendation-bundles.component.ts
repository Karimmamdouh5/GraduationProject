import { RecommendationBundles } from './../../../../Classes/recommendation-bundles';
import { ShopProduct } from './../../../../Classes/ShopProduct';
import { CartService } from 'src/app/Services/cart.service';
import { BundelsRecommendationService } from './../../../../Services/bundels-recommendation.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShopSingleService } from 'src/app/Services/shop-single.service';

@Component({
  selector: 'app-recommendation-bundles',
  templateUrl: './recommendation-bundles.component.html',
  styleUrls: ['./recommendation-bundles.component.scss']
})
export class RecommendationBundlesComponent
{
constructor(public RecombundelsSrv:BundelsRecommendationService,public CartSrv:CartService,public ShopSingleSrv:ShopSingleService,public router:Router)
  {
      if(this.RecombundelsSrv.FilteredBundels.length==0)
      {
        this.RecombundelsSrv.GetAllComputers().subscribe(x=>
          {
            
            
            x.data.forEach(item=>
              {
                var Device = new RecommendationBundles();
                Device.description=x.data[x.data.indexOf(item)].description;
                Device.imageUrl=x.data[x.data.indexOf(item)].imageUrl;
                Device.name=x.data[x.data.indexOf(item)].name;
                Device.price=x.data[x.data.indexOf(item)].price;
                Device.purpose=x.data[x.data.indexOf(item)].purpose;
                Device.isLaptop=x.data[x.data.indexOf(item)].isLaptop;
                Device.isPc=x.data[x.data.indexOf(item)].isPc;
                this.RecombundelsSrv.Bundels.push(Device);
              });
              this.RecombundelsSrv.FilteredBundels=this.RecombundelsSrv.Bundels;
          });
          this.RecombundelsSrv.GetAllCompPurposes().subscribe(x=>{this.RecombundelsSrv.Purposes=x.data});
      }
  }

Product:RecommendationBundles= new RecommendationBundles();

Recommend(Purp:string,DeviceType:string)
{
  console.log(this.RecombundelsSrv.purp);
  
this.RecombundelsSrv.Recommend(Purp,DeviceType);
}
AddToCart(item:RecommendationBundles)
{
  this.Product.name=item.name;
  this.Product.price=item.price;
  this.Product.imageUrl=item.imageUrl;
  this.CartSrv.addToCart(this.Product,1);
  this.Product=new RecommendationBundles();
}
NavigateToShopSingle(product:RecommendationBundles)
{
  this.Product.name=product.name;
  this.Product.description=product.description;
  this.Product.imageUrl=product.imageUrl;
  this.Product.isLaptop=product.isLaptop;
  this.Product.isPc=product.isPc;
  this.Product.price=product.price;
  this.Product.purpose=product.purpose;
  this.ShopSingleSrv.product=this.Product;
  localStorage.setItem('product',JSON.stringify(this.ShopSingleSrv.product));
  this.router.navigate(['/ShopSingle']);
}
}
