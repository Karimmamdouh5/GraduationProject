import { Injectable } from '@angular/core';
import { RecommendationBundles } from '../Classes/recommendation-bundles';
import { HttpClient } from '@angular/common/http';
import { MyResponse } from '../Classes/Myresponse';
import { Observable } from 'rxjs';
import { Purpose } from '../Classes/purpose';

@Injectable({
  providedIn: 'root'
})
export class BundelsRecommendationService {


  purp='';
  DeviceType='';
  Purposes:Purpose[]=
  [
    /*'Low end gaming','Mid Range gaming','High end gaming','Education','Content creator'*/
  ];
  ApiUrl='http://gradprojbackend2-001-site1.btempurl.com/api';
  //ApiUrl='https://localhost:7202/api/'
  ComputerTypes=['Pc','Laptop'];
  constructor(public Http:HttpClient) { }

  Bundels : RecommendationBundles[]=
  [];

  FilteredBundels:RecommendationBundles[]=[];

  Recommend(Purpose:string,DeviceType:string)
  {
    this.FilteredBundels=this.Bundels;
    if(Purpose==''&&DeviceType=='Pc')
    {
      this.FilteredBundels=this.Bundels.filter((x)=>{return x.isPc==true});
    }
    if(Purpose==''&&DeviceType=='Laptop')
    {
      this.FilteredBundels=this.Bundels.filter((x)=>{return x.isLaptop===true});
    }
    if(DeviceType==''&&Purpose!='')
    {
      this.FilteredBundels=this.Bundels.filter((x)=>{return x.purpose.name===Purpose});   
    } 
    if(Purpose !='' && DeviceType=='Pc')
    {
      this.FilteredBundels=this.Bundels.filter((x)=>{return x.purpose.name===Purpose&&x.isPc===true});
    }
    if(Purpose !='' && DeviceType=='Laptop')
    {
      this.FilteredBundels=this.Bundels.filter((x)=>{return x.purpose.name===Purpose&&x.isLaptop===true});
    }
  }

  GetAllComputers():Observable<MyResponse>
  {
    this.Bundels=[];
    this.FilteredBundels=[];
    return this.Http.get<MyResponse>(this.ApiUrl+'/Computers/GetAllComputers');
  }

  GetAllCompPurposes():Observable<MyResponse>
  {
    return this.Http.get<MyResponse>(this.ApiUrl+'/Computers/GetAllCompPurposes')
  }

}
