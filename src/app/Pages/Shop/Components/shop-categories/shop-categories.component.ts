import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { ShopService } from 'src/app/Services/shop.service';
@Component({
  selector: 'app-shop-categories',
  templateUrl: './shop-categories.component.html',
  styleUrls: ['./shop-categories.component.scss']
})
export class ShopCategoriesComponent
{

  constructor(public ShopSrv:ShopService)
  {

  }
Categories=['Processors','Motherboards','GPU','Power supply','Ram','Storage','Case','Monitor','Cooler'];

}
