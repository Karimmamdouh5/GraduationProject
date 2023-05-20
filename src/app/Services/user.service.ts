import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, observable } from 'rxjs';
import { MyResponse } from '../Classes/Myresponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //ApiUrl='http://gradprojbackend2-001-site1.btempurl.com/api';
  ApiUrl='https://localhost:7202/api';
  header:HttpHeaders=new HttpHeaders();
  constructor(public Http:HttpClient)
   { }

   AddUser(body:any):Observable<MyResponse<string>>
   {
    console.log(body);
    
    return this.Http.post<MyResponse<string>>(this.ApiUrl+'/User/AddUser',body);
   }
   
   Uploadphoto(Email:string,Photo:any):Observable<MyResponse<any>>
   {
    return this.Http.put<MyResponse<any>>(this.ApiUrl+'/User/UploadPhoto', {email:Email,photo:Photo},{headers:this.header});
   }
}
