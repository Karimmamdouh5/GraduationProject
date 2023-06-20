import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatStepper } from '@angular/material/stepper';
import { AddOrderRequest } from 'src/app/Classes/add-order-request';
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

  Order: AddOrderRequest = new AddOrderRequest();
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
  EmailCheckError='';
  PasswordCheckError='';
  ConfirmPasswordError='';

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
          else
          {
              Swal.fire
              ({
                title: 'Message!',
                text: 'Something went wrong , please try again later',
                icon: 'error',
                confirmButtonText: 'OK'
              }); 
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
    this.user.isCustomer=true;
    this.Username='';
    this.Password='';
    
    var EmailCheckMessage=this.CheckEmail(this.user.email);
    var PasswordCheckMessage = this.CheckPassword(this.user.password);
    if(EmailCheckMessage!='Ok')
    {
      
      this.EmailCheckError=EmailCheckMessage;

    }
    if(EmailCheckMessage=='Ok')
    {
      this.EmailCheckError='';
    }

    if(PasswordCheckMessage!='Ok')
    {
      
      this.PasswordCheckError=PasswordCheckMessage;

    }
    if(PasswordCheckMessage=='Ok')
    {
      this.PasswordCheckError='';
    }
    if(this.user.password!=this.user.confirmPassword)
    {
      this.ConfirmPasswordError='Password doesnt match';
      
    }
    if(this.user.password==this.user.confirmPassword)
    {
      this.ConfirmPasswordError='';

    }
    if(EmailCheckMessage=='Ok'&&PasswordCheckMessage=='Ok'&&this.user.password==this.user.confirmPassword)
    {
      this.ConfirmPasswordError='';
      this.EmailCheckError='';
      this.PasswordCheckError='';
    this.UserSrv.AddUser(this.user).subscribe(
     firstresponse => {
   
      if (firstresponse.isSuccess == true)
      {
        
        
      
            Swal.fire
           ({
             title: 'Message!',
             text: firstresponse.message,
             icon: 'success',
             confirmButtonText: 'OK',
             
           }).then(()=>{this.SignUpShow=false;this.user=new AddUserRequest()});


       
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
      this.Order.deliveryAddress=this.thirdFormGroup.controls.BuildingNumber.value+' , '+this.thirdFormGroup.controls.StreetName.value+' , '+this.thirdFormGroup.controls.DistrictName.value;
      this.Order.isCashPayment=this.isCashPayment;
      this.Order.orderAmount=this.CartSrv.TotalPrice;
      var obj ={id:0,shopProduct:null,Builtpc:null,Quantity:0}

      for (let index = 0; index < this.CartSrv.CartItems.length; index++)
      {
        if(this.CartSrv.CartItems[index].ProductsList!=null)
        {
           obj ={id:0,shopProduct:null,Builtpc:this.CartSrv.CartItems[index],Quantity:this.CartSrv.CartItems[index].quantity}
          this.Order.orderItems.push(obj);  

        }
        else
        {
           obj ={id:0,shopProduct:this.CartSrv.CartItems[index],Builtpc:null,Quantity:this.CartSrv.CartItems[index].quantity}
           this.Order.orderItems.push(obj);  
        }
      }
      this.Order.customer.id=this.UserSrv.user.id;
      this.Order.customer.FirstName=this.UserSrv.user.firstName;
      this.Order.customer.LastName=this.UserSrv.user.lastName;
      if(this.secondFormGroup.controls.ExpiryDateYear.value!=''&&this.secondFormGroup.controls.ExpiryDateMonth.value!='')
      {
      this.Order.creditData.expiryDate=this.secondFormGroup.controls.ExpiryDateMonth.value+'/'+this.secondFormGroup.controls.ExpiryDateYear.value;
      }
      
      this.CartSrv.OrderSubmit(this.Order).subscribe
      (
        respone=>
        {
          if(respone.isSuccess==true)
          {
            
            Swal.fire
            ({
              title: 'Message!',
              text: respone.message,
              icon: 'success',
              confirmButtonText: 'OK'
            }); 
          }
          else
          {
            Swal.fire
            ({
              title: 'Message!',
              text: 'Something wrong happend , please try again later',
              icon: 'error',
              confirmButtonText: 'OK'
            }); 
          }

        },
        error=>
        {
          
          Swal.fire
          ({
            title: 'Message!',
            text: error.error[0],
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      ); 
    }
  }
  Back()
  {
    this.currentStepIndex--;
  }
  CheckPassword(text: string): string 
  {
    const capitalRegex = /[A-Z]/;
    const specialRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;
    
    var CapitalResult=capitalRegex.test(text) && specialRegex.test(text) && numberRegex.test(text);
    if(CapitalResult==false)
    {
      return 'The Password must contain at least a capital letter and a speacial character and one number '
    }
    else
    {
      return 'Ok'
    }
  }
  CheckEmail(email: string): string {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var EmailCheckResult=emailRegex.test(email);
    if(EmailCheckResult==false)
    {
      return 'Your Email should be like this : example@example.com';
    }
    else{ return 'Ok'}
  }
}
