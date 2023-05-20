import { HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AddUserRequest } from 'src/app/Classes/add-user-request';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent 
{
user:AddUserRequest=new AddUserRequest();
formData:FormData = new FormData();
imgsrc='';
headers = new HttpHeaders();
byteArray = new Uint8Array();
selectedFile:any=null;
constructor(public UserSrv:UserService){}
onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
  //if (this.selectedFile) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const base64String = e.target.result;
      this.imgsrc = base64String;
    };
    reader.readAsDataURL(this.selectedFile);
  //}
}

AddUser() {
 const fd = new FormData();
  fd.append('image',this.selectedFile,this.selectedFile.name);
  this.UserSrv.AddUser(this.user).subscribe(x => {
    if (x.isSuccess == true) {
      this.UserSrv.Uploadphoto(this.user.email, fd).subscribe(b => {
        console.log(b.isSuccess);
      });
    }
  });
}
}
