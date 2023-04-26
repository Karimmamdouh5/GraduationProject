import { ShopService } from 'src/app/Services/shop.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ServicesTrialService } from 'src/app/Services/services-trial.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent
{
  constructor(public router:Router,public ShopSrv:ShopService)
  {

  }

Categories=
[
  {
    CategoryName:'Processor',
    Image:'core i5.png'
  },
  {
    CategoryName:'GPU',
    Image:'GPU.png'
  },
  {
    CategoryName:'Ram',
    Image:'ram.jpg'
  },
  {
    CategoryName:'Motherboard',
    Image:'motherboard.png'
  },
  {
    CategoryName:'Cooler',
    Image:'coolers.png'
  },
  {
    CategoryName:'Case',
    Image:'cases.jpg'
  },
  {
    CategoryName:'Monitor',
    Image:'monitors.jpg'
  },
  {
    CategoryName:'Storage',
    Image:'storage.jpg'
  },
];

Slides=
[
  {
    Items:[this.Categories[0],this.Categories[1],this.Categories[2]]
  },
  {
    Items:[this.Categories[3],this.Categories[4],this.Categories[5]]
  },
  {
    Items:[this.Categories[6],this.Categories[7]]
  },
];
RouteToShop(Category:string)
{
  this.router.navigate(['/Shop']);
  this.ShopSrv.ShopProductsFilter(Category);
}

}
