import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ServicesTrialService } from 'src/app/Services/services-trial.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent
{
  constructor(public TrialSrv:ServicesTrialService,public router:Router)
  {

  }

Categories=
[
  {
    CategoryName:'CPUs',
    Image:'core i5.jpg'
  },
  {
    CategoryName:'GPUs',
    Image:'GPU.jpg'
  },
  {
    CategoryName:'RAMs',
    Image:'ram.jpg'
  },
  {
    CategoryName:'Motherboards',
    Image:'motherboard.png'
  },
  {
    CategoryName:'Coolers',
    Image:'coolers.png'
  },
  {
    CategoryName:'Cases',
    Image:'cases.jpg'
  },
  {
    CategoryName:'Monitors',
    Image:'monitors.jpg'
  },
  {
    CategoryName:'Storage',
    Image:'storage.jpg'
  },
];

Slides=
[
  {
    Items:[this.Categories[0],this.Categories[1],this.Categories[2]]
  },
  {
    Items:[this.Categories[3],this.Categories[4],this.Categories[5]]
  },
  {
    Items:[this.Categories[6],this.Categories[7]]
  },
];
route(route:string)
{
  this.router.navigate([route]);
}

}
