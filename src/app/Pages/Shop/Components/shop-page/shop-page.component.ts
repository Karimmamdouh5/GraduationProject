import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { LoaderService } from 'src/app/Services/loader.service';
import { ServicesTrialService } from 'src/app/Services/services-trial.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent
{

  constructor(public breakPointObserver:BreakpointObserver,
    public LoaderSrv:LoaderService)
  {
  }

}
