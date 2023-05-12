import { Product } from "./product";

export class LookupDto 
{
    id=0;
    name='';
    products:Product[]=[];
    selectedvalue='';
    isPcComponent=false;
}
