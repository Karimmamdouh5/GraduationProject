import { CreditData } from "./credit-data";
import { Customer } from "./customer";
import { ShopProduct } from "./ShopProduct";


export class OrderItems 
{
    id:number=0;shopProduct:ShopProduct=new ShopProduct;Quantity:number=0
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
    creditData:CreditData=new CreditData();
    orderItems:OrderItems[]=[];
}

