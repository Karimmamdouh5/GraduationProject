import { Component } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})

export class OurServicesComponent {
  public isCollapsed = true; 
  public isCollapsed1 = true; 
  public isCollapsed2 = true; 
  public isCollapsed3 = true; 
}
 

@Component({
	selector: 'ngbd-collapse-basic',
	standalone: true,
	imports: [NgbCollapseModule],
	templateUrl: './our-services.component.html',
})
export class NgbdCollapseBasic {
	public isCollapsed  = false;
  public isCollapsed1 = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;
}
