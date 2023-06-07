import { CartService } from 'src/app/Services/cart.service';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-cart-model',
  templateUrl: './cart-model.component.html',
  styleUrls: ['./cart-model.component.scss']
})
export class CartModelComponent
{
  @ViewChild('creditPanel') creditPanel: MatExpansionPanel | undefined;
  @ViewChild('cashPanel') cashPanel: MatExpansionPanel | undefined;

  CreditpanelOpenState = false;
  Months=[1,2,3,4,5,6,7,8,9,10,11,12];
  Years:number[]=[];
  border='none';
  
constructor(public router:Router,public CartSrv:CartService)
{
  var CurrentYear = new Date().getFullYear();
  for (let index = 0; index < 11; index++) {
    this.Years.push(CurrentYear+index)
  }  
}
Navigation(route:string)
{
this.router.navigate(['/',route])
}


closeCreditPanel(creditPanel: MatExpansionPanel,cashPanel:MatExpansionPanel)
 {
  creditPanel.close();
  this.closeCashPanel(cashPanel);
  this.border='none';
}
closeCashPanel(panel: MatExpansionPanel) {
  panel.close();
}
CreditBorderToggle()
{
  if(this.border=='none')
  {
    this.border='1px solid darkred';
  }
  else{this.border='none';}
}
OpenCheckoutStepper()
{
  this.CartSrv.CartStepperDisplay='Block';
}
}
