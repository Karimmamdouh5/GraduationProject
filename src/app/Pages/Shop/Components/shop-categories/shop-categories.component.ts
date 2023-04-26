import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { Product } from 'src/app/Classes/product';
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

GetAllProducts()
{
  this.ShopSrv.GetAllProducts().subscribe(x=>
    {(
      this.ShopSrv.products=[],
      this.ShopSrv.filteredProducts=[],
      this.ShopSrv.FirstPage=[],
      this.ShopSrv.EndPointProducts=x,
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
        }),
        this.ShopSrv.filteredProducts=this.ShopSrv.products,
        this.ShopSrv.paginator.length=this.ShopSrv.filteredProducts.length
/*        this.listOfProducts=this.ShopSrv.filteredProducts,
        this.totalProducts = this.listOfProducts.length,
        this.Slicing(),
        this.paginator.length = this.totalProducts,
        this.ShopSrv.paginator=this.paginator*/
        )});

}

}
