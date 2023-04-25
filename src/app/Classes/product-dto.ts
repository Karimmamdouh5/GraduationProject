import { Category } from './category';
export class ProductDto
{
  category:Category= new Category();
  description:string ='';
  imageUrl:string='';
  name: string='';
  price: number =0;
  Quantity=0;
}
