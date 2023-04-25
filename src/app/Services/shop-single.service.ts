import { Product } from './../Classes/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopSingleService {

  product:Product=new Product();
  constructor() { }
}
