import { ShopSingleService } from './../../../../Services/shop-single.service';
import { Router } from '@angular/router';
import { ShopService } from './../../../../Services/shop.service';
import { Product } from './../../../../Classes/product';
import { CartSnackBarComponent } from './../cart-snack-bar/cart-snack-bar.component';
import { CartService } from 'src/app/Services/cart.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LoaderService } from 'src/app/Services/loader.service';
@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.scss']
})
export class ShopProductsComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true })paginator!: MatPaginator;
  listOfProducts:Product[] =[];
  totalProducts: number = this.ShopSrv.products.length;
//page : number=1
  constructor(public CartSrv:CartService,public _snackBar: MatSnackBar,public ShopSrv:ShopService , public router:Router,public ShopSingleSrv:ShopSingleService,public breakPointObserver:BreakpointObserver,
    public LoaderSrv:LoaderService)
  {

  }

  NavigateToShopSingle(product:Product)
  {
      this.ShopSingleSrv.product=product;
      this.router.navigate(['/ShopSingle']);
  }

  ngOnInit(): void
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
          this.listOfProducts=this.ShopSrv.filteredProducts,
          this.totalProducts = this.listOfProducts.length,
          this.Slicing(),
          this.paginator.length = this.totalProducts,
          this.ShopSrv.paginator=this.paginator
          )});
  }

  Slicing()
  {
    if (this.ShopSrv.filteredProducts.length>9)
    {

      this.ShopSrv.filteredProducts= this.ShopSrv.filteredProducts.slice(0,9)

    }
  }

  paginate(event: PageEvent) {
    // Update the displayed products based on the current page index and page size
    this.ShopSrv.filteredProducts=this.ShopSrv.products;
    this.ShopSrv.filteredProducts = this.getProducts(event.pageIndex,event.pageSize);
    // Update the total number of products and the paginator's length
    this.totalProducts = this.ShopSrv.filteredProducts.length;
  }

  getProducts(pageIndex: number,pageSize: number): Product[] {
    // Return the products for the current page
    if(pageIndex==0)
    {
      return this.ShopSrv.filteredProducts.slice(pageIndex, pageSize);
    }
    else
    {
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    return this.ShopSrv.filteredProducts.slice(startIndex, endIndex);
    }
  }
}
