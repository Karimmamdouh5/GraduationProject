import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent {

  products=[
    {
    Image: "core i5.jpg",
    NAME:"core i5",
    Price:"6400"
    }
    ,
    {
      Image: "ram1.png",
      NAME:"AORUS RGB Memory DDR4 16GB (2x8GB) ",
      Price:"3000"
      }
      ,
      {
        Image: "gpu1.jpg",
        NAME:"GIGABYTE AORUS GeForce RTX 4080 16GB MASTER",
        Price:"57000"
        }

]
}
