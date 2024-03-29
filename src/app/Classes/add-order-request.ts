import { Builtpc } from "./builtpc";
import { CreditData } from "./credit-data";
import { Customer } from "./customer";
import { ShopProduct } from "./ShopProduct";


export class OrderItems 
{
    id:number=0;shopProduct:any|undefined=null;Builtpc:any|undefined=null;Quantity:number=0
}

export class AddOrderRequest 
{
    customer:Customer=new Customer();
    deliveryAddress:string='';
    customerPhoneNumber:string='';
    customerLandline:string='';
    orderAmount:number=0;
    isCashPayment:boolean=false;
    orderStatus={id:0,name:'Pending'};
    creditData:any|undefined=null;
    orderItems:OrderItems[]=[];
}

