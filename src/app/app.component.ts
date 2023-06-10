import { Component } from '@angular/core';
import { ServicesTrialService } from './Services/services-trial.service';
import { LoaderService } from './Services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GraduationProject';
  constructor(public LoaderSrv:LoaderService){}
}
