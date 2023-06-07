import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent
{

  Username='';
  Password='';
  constructor(public UserSrv:UserService){}
  Login()
  {
    this.UserSrv.Login(this.Username,this.Password).subscribe
      (
        response=>
        {
          if(response.isSuccess==true)
          {
            this.UserSrv.user=response.data,
            Swal.fire
            ({
              title: 'Message!',
              text: 'Done',
              icon: 'success',
              confirmButtonText: 'OK'
            }); 
            console.log(this.UserSrv.user);
            
          }
          else{console.log('something wrong');}
        },
        error=>
        {
          Swal.fire
          ({
            title: 'Message!',
            text: error.error,
            icon: 'error',
            confirmButtonText: 'OK'
          }); 
        }
      )
  }
}
