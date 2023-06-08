import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatStepper } from '@angular/material/stepper';
import { AddUserRequest } from 'src/app/Classes/add-user-request';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-stepper',
  templateUrl: './cart-stepper.component.html',
  styleUrls: ['./cart-stepper.component.scss'],
})
export class CartStepperComponent 
{
  Username='';
  Password='';


  CreditpanelOpenState = false;
  Months=[1,2,3,4,5,6,7,8,9,10,11,12];
  Years:number[]=[];
  border='none';
  SignUpShow=false;
  user:AddUserRequest=new AddUserRequest();
  currentStepIndex:number=0;

  @ViewChild('stepper') stepper: MatStepper|undefined;
  @ViewChild('creditPanel') creditPanel: MatExpansionPanel | undefined;
  @ViewChild('cashPanel') cashPanel: MatExpansionPanel | undefined;

  public firstFormGroup = this._formBuilder.group({
    username: ['', Validators.required],
    password:['',Validators.required]
  });
  public secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;
  isOptional = false;

  constructor(public _formBuilder: FormBuilder,public CartSrv:CartService,public UserSrv:UserService)
   {
    var CurrentYear = new Date().getFullYear();
    for (let index = 0; index < 11; index++) {
      this.Years.push(CurrentYear+index)
    }  
   }


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
              text: 'Hello , '+this.UserSrv.user.firstName +' !',
              icon: 'success',
              confirmButtonText: 'OK'
            }); 
            console.log(this.UserSrv.user);
            this.currentStepIndex++;
            
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
  closeCashPanel(panel: MatExpansionPanel) {
    panel.close();
  }
  closeCreditPanel(creditPanel: MatExpansionPanel,cashPanel:MatExpansionPanel)
 {
  creditPanel.close();
  this.closeCashPanel(cashPanel);
  //this.border='none';
  }
  CreditBorderToggle()
  {
    if(this.border=='none')
    {
      this.border='1px solid darkred';
    }
    else{this.border='none';}
  }
  onNextClick() 
  {
    if(this.UserSrv.user!=null)
    {
      this.stepper?.next();
      this.currentStepIndex++;
      console.log(this.currentStepIndex);
      
    }
    else
    {
      Swal.fire
      ({
        title: 'Message!',
        text: 'Please check your credintials for sign in !',
        icon: 'warning',
        confirmButtonText: 'OK'
      }); 
    }
  }
  ShowSignUpPage()
  {
    this.SignUpShow=true;
  }
  BackToSignIn()
  {
    this.SignUpShow=false;
  }
  AddUser() {
    // var fd = new FormData();
    // fd.append('image',this.selectedFile,this.selectedFile.name);
    // fd.append('email',this.user.email);
    // this.user.isCustomer=true;
   
    this.UserSrv.AddUser(this.user).subscribe(
     firstresponse => {
   
      if (firstresponse.isSuccess == true)
      {
        {
         if(firstresponse.isSuccess==true)
         {         
            Swal.fire
           ({
             title: 'Message!',
             text: firstresponse.message,
             icon: 'success',
             confirmButtonText: 'OK'
           });
         }

       }  
      }
           
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
     );
   }
}
