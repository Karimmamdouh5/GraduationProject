import { ShopProduct } from "./ShopProduct";

export class Builtpc extends ShopProduct 
{
    
/*public Processor :Product = new Product();
public motherboard :Product = new Product();
public ram :Product = new Product();
public gpu :Product = new Product();
public Powersupply :Product = new Product();
public Storage :Product = new Product();
public Case :Product = new Product();
public Monitor :Product = new Product();
public Cooler :Product = new Product();
*/
public ProductsList: Array<ShopProduct> =[];
  override name: string='';
  override price: any;
  override imageUrl: any;

}
//MainComponents=['Processor','Motherboard','GPU','Powersupply','Ram','Storage','Case','Monitor','Cooler'];


