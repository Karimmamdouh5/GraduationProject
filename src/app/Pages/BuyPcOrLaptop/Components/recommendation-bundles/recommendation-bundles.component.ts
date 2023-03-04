import { BundelsRecommendationService } from './../../../../Services/bundels-recommendation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendation-bundles',
  templateUrl: './recommendation-bundles.component.html',
  styleUrls: ['./recommendation-bundles.component.scss']
})
export class RecommendationBundlesComponent
{
  constructor(public RecombundelsSrv:BundelsRecommendationService)
  {}
purpose='';
Purposes=
[
  'Low end gaming','Mid end gaming','High end gaming','Education','Content creator'
];
Recommend(Purpose:string)
{
this.purpose=Purpose;
this.RecombundelsSrv.Recommend(this.purpose);
}
}
