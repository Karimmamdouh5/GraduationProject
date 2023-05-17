import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesTrialService
{
  Prop2='';
  constructor() { }

  ToggleModal()
  {
    if(this.Prop2)
    {
      this.Prop2='none';
    }
    else
    {
    this.Prop2='block';
    }
  }
}
