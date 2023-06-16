import { ShopProduct } from "./ShopProduct";
import { Category } from "d:/My Private Files/Karimmamdouh5-master1/src/app/Classes/category";

export class RecommendedProduct extends ShopProduct 
{
  isChecked=false;
  override category: import("d:/My Private Files/Karimmamdouh5-master1/src/app/Classes/category").Category=new Category();
  override description: string='';
  override imageUrl: string='';
  override name: string='';
  override price: number=0;
  override quantity: number=0;
}
