import { ShopProduct } from "./ShopProduct";
import { Category } from "./category";

export class RecommendedProduct extends ShopProduct 
{
  isChecked=false;
  override category: Category=new Category();
  override description: string='';
  override imageUrl: string='';
  override name: string='';
  override price: number=0;
  override quantity: number=0;
}
