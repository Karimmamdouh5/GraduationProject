import { ShopProduct } from "./ShopProduct";

export class LookupDto 
{
    id=0;
    name='';
    products:ShopProduct[]=[];
    selectedvalue='';
    isPcComponent=false;
}
