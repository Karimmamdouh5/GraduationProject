import { Injectable } from '@angular/core';
import { Product } from '../Classes/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService
{
  products:Product[]=
  [
    {
      Image: "core i5.jpg",
      NAME:"core i5",
      Price:6400,
      Quantity:0,
      Category:'Processor'

      }
      ,
      {
        Image: "ram1.png",
        NAME:"AORUS RGB Memory DDR4 16GB (2x8GB) ",
        Price:3000,
        Quantity:0,
        Category:'RAM'

      }
      ,
      {
        Image: "gpu1.jpg",
        NAME:"GIGABYTE AORUS GeForce RTX 4080 16GB MASTER",
        Price:5700,
        Quantity:0,
        Category:'GPU'

      }
   ];

  constructor() { }
}
