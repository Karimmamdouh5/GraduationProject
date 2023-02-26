import { Component } from '@angular/core';
import { ServicesTrialService } from 'src/app/Services/services-trial.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent
{

  constructor(public TrialSrv:ServicesTrialService)
  {
console.log(this.TrialSrv.HelloText);
console.log(this.TrialSrv.Prop2);

  }

}
