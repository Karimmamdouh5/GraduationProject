import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { LoaderService } from 'src/app/Services/loader.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent
{
 constructor(public breakPointObserver:BreakpointObserver,
  public LoaderSrv:LoaderService){}
}
