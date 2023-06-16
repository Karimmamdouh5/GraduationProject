import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/Classes/category';
import { ShopProduct } from 'src/app/Classes/ShopProduct';
import { ShopSingleService } from 'src/app/Services/shop-single.service';
import { ShopService } from 'src/app/Services/shop.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent {


forwardDisable=false;
BackwardDisable=false;
ViewProducts:ShopProduct[]=[]

constructor(public ShopSingleSrv:ShopSingleService,public ShopSrv:ShopService,public router:Router)
{
  this.ViewProducts=this.ShopSingleSrv.RelatedProducts.slice(0,3);
  this.BackwardDisable=true;
  this.ShopSingleSrv.SelectRelatedProducts(this.ShopSingleSrv.product);
  if(this.ShopSingleSrv.RelatedProducts.length<3)
  {
    this.forwardDisable=true;
    this.BackwardDisable=true;
  }
  this.ShopSingleSrv.RecommendProducts(this.ShopSrv.products)
}

PaginateForward()
{
  this.ViewProducts=this.ShopSingleSrv.RelatedProducts.slice((this.ShopSingleSrv.RelatedProducts.indexOf(this.ViewProducts[this.ViewProducts.length-1])+1),(this.ShopSingleSrv.RelatedProducts.indexOf(this.ViewProducts[this.ViewProducts.length-1])+1)+3);
  this.BackwardDisable=false
  if(((this.ShopSingleSrv.RelatedProducts.indexOf(this.ViewProducts[this.ViewProducts.length-1]))+1)==this.ShopSingleSrv.RelatedProducts.length)
  {
    this.forwardDisable=true;
  }
}

PaginateBackward()
{
  this.ViewProducts=this.ShopSingleSrv.RelatedProducts.slice((this.ShopSingleSrv.RelatedProducts.indexOf(this.ViewProducts[0]))-3,this.ShopSingleSrv.RelatedProducts.indexOf(this.ViewProducts[0]))
  this.forwardDisable=false;
  if(((this.ShopSingleSrv.RelatedProducts.indexOf(this.ViewProducts[0])))==0)
  {
    this.BackwardDisable=true;
  }
}

NavigateToShopSingle(product:ShopProduct)
{
    this.ShopSingleSrv.product=product;
    this.router.navigate(['/ShopSingle']);
}

ScrollToTop()
{
  window.scrollTo
  ({
    top:0,
    behavior:'smooth',
  })
}



}
