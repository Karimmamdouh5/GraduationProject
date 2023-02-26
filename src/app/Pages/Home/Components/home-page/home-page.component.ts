import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesTrialService } from 'src/app/Services/services-trial.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent
{
  constructor(public TrailSrv:ServicesTrialService , public router:Router)
  {
    console.log(TrailSrv.HelloText);
    this.TrailSrv.Prop2='Hello 2';
    console.log(this.TrailSrv.Prop2);
  }


}
