import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, observable } from 'rxjs';
import { MyResponse } from '../Classes/Myresponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ApiUrl='http://gradprojbackend2-001-site1.btempurl.com/api';
  header:HttpHeaders=new HttpHeaders();
  constructor(public Http:HttpClient)
   { }

   AddUser(body:any):Observable<MyResponse<string>>
   {
    console.log(body);
    return this.Http.post<MyResponse<string>>(this.ApiUrl+'/User/AddUser',body,{headers:this.header});
   }
   
   Uploadphoto(Photo:any):Observable<MyResponse<any>>
   {
    return this.Http.put<MyResponse<any>>(this.ApiUrl+'/User/UploadPhoto', Photo,{headers:this.header});
   }
}
