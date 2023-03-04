import { Injectable } from '@angular/core';
import { RecommendationBundles } from '../Classes/recommendation-bundles';

@Injectable({
  providedIn: 'root'
})
export class BundelsRecommendationService {

  constructor() { }

  Bundels : RecommendationBundles[]=
  [
    {
      Name:'Low End Gaming Pc Build #1' ,
      Purpose:'Low end gaming',
      Description:'Processor: Ryzen 5 4650G Tray Motherboard GigabyteB B450M-S2H Ram: Crucial 8GB DDR4 SSD : 128GB lexarCase + PSU : Thermaltake V200 + 600W',
      Price:10499 ,
      Image:'',
    }
  ];

  Recommend(Purpose:string)
  {
  this.Bundels=this.Bundels.filter((x)=>{return x.Purpose==Purpose});
  console.log(Purpose);
  console.log(this.Bundels);
  }
}
