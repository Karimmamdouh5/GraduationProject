import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
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
  encapsulation: ViewEncapsulation.None

})
export class CartStepperComponent 
{
  Username='';
  Password='';

  

  CreditpanelOpenState = false;
  isCreditPayment=false;
  isCashPayment=false;
  isExpanded = false;
  Months=[1,2,3,4,5,6,7,8,9,10,11,12];
  Years:number[]=[];
  border='none';
  SignUpShow=false;
  user:AddUserRequest=new AddUserRequest();
  currentStepIndex:number=0;

  @ViewChild('stepper') stepper: MatStepper|undefined;
  @ViewChild('creditPanel') creditPanel: MatExpansionPanel | undefined;
  @ViewChild('cashPanel') cashPanel: MatExpansionPanel | undefined;

 

  isLinear = true;

  constructor(public _formBuilder: FormBuilder,public CartSrv:CartService,public UserSrv:UserService)
   {
    var CurrentYear = new Date().getFullYear();
    for (let index = 0; index < 11; index++) {
      this.Years.push(CurrentYear+index)
    }  
   }

   public firstFormGroup = this._formBuilder.group({
    username: ['', Validators.required],
    password:['',Validators.required]
  });
  public secondFormGroup = this._formBuilder.group({
    CardNumber: [''],
    ExpiryDateMonth: [''],
    ExpiryDateYear: [''],
    VerificationValue: ['']
  });
  public thirdFormGroup =this ._formBuilder.group({
    BuildingNumber: ['', Validators.required],
    StreetName: ['', Validators.required],
    DistrictName: ['', Validators.required],
    Phonenumber: ['', Validators.required],
    LandlineNumber: [''],
  });

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
  CreditBorderToggle()
  {
      this.border='1px solid darkred';
      this.CreditpanelOpenState=true;
  }
  onNextClick() 
  {

    var controls=[this.secondFormGroup.controls.CardNumber,this.secondFormGroup.controls.ExpiryDateMonth,this.secondFormGroup.controls.ExpiryDateYear,this.secondFormGroup.controls.VerificationValue]    
    var haserror:boolean=false;
    controls.forEach(c=>
      {
        if(c.value=='')
        {
          haserror=true;
        }
      })    
      
    if((this.isCreditPayment==true && !haserror)||this.isCashPayment==true)
        {
          this.currentStepIndex=this.currentStepIndex+1;
          //console.log(this.currentStepIndex);
          //console.log(haserror);
        }
        else
        {
          Swal.fire
          ({
            title: 'Message!',
            text: 'Please check your payment type !',
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
   
    console.log(this.user);
    this.user.isCustomer=true;
    
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
  CreditPaymentToggle()
  {
    this.isCreditPayment=true;
    this.isCashPayment=false;

     this.secondFormGroup.controls.CardNumber.updateValueAndValidity();
     this.secondFormGroup.controls.ExpiryDateMonth.updateValueAndValidity();
     this.secondFormGroup.controls.ExpiryDateYear.updateValueAndValidity();
     this.secondFormGroup.controls.VerificationValue.updateValueAndValidity();

     this.border='1px solid darkred';
     this.CreditpanelOpenState=true;
  }
  CashPaymentToggle()
  {
    this.isCashPayment=true;
    this.isCreditPayment=false;

    this.secondFormGroup.controls.CardNumber.updateValueAndValidity();
    this.secondFormGroup.controls.ExpiryDateMonth.updateValueAndValidity();
    this.secondFormGroup.controls.ExpiryDateYear.updateValueAndValidity();
    this.secondFormGroup.controls.VerificationValue.updateValueAndValidity();
    

    this.border='none';
    this.CreditpanelOpenState=true;
  }
  Confirmation()
  {
    var controls=[this.thirdFormGroup.controls.BuildingNumber,this.thirdFormGroup.controls.DistrictName,this.thirdFormGroup.controls.Phonenumber,this.thirdFormGroup.controls.StreetName];
    var haserror=false;
    controls.forEach(e=>{
      if(e.hasError('required'))
      {
        haserror=true;
      }
    })   
    if(haserror)
    {
      Swal.fire
      ({
        title: 'Message!',
        text: 'Please fill all the required fields !',
        icon: 'warning',
        confirmButtonText: 'OK'
      });  
    }
    else
    {
      //submit order

      Swal.fire
      ({
        title: 'Message!',
        text: 'Order submitted successfully !',
        icon: 'success',
        confirmButtonText: 'OK'
      });  
    }
  }
  Back()
  {
    this.currentStepIndex--;
  }

}
