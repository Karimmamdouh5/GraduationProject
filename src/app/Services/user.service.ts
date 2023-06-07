import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, observable } from 'rxjs';
import { MyResponse } from '../Classes/Myresponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ApiUrl='http://gradprojbackend2-001-site1.btempurl.com/api';
 // ApiUrl='https://localhost:7202/api'
  header:HttpHeaders=new HttpHeaders();
  user:any;
  constructor(public Http:HttpClient)
   { }

   AddUser(body:any):Observable<MyResponse>
   {
    console.log(body);
    return this.Http.post<MyResponse>(this.ApiUrl+'/User/AddUser',body,{headers:this.header});
   }
   
   Uploadphoto(Photo:any):Observable<MyResponse>
   {
    return this.Http.put<MyResponse>(this.ApiUrl+'/User/UploadPhoto', Photo,{headers:this.header});
   }

   Login(Username:string,Password:string):Observable<MyResponse>
   {
    var ReqBody={Username,Password};
    return this.Http.post<MyResponse>(this.ApiUrl+'/User/Login',ReqBody )
   }
}
