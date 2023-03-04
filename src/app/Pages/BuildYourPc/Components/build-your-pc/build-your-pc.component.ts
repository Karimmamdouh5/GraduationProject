import { Product } from './../../../../Classes/product';
import { Component } from '@angular/core';
import { ShopService } from 'src/app/Services/shop.service';

@Component({
  selector: 'app-build-your-pc',
  templateUrl: './build-your-pc.component.html',
  styleUrls: ['./build-your-pc.component.scss']
})
export class BuildYourPcComponent
{
  /*
MainComponents=['Motherboard','CPU','RAM','SSD','HDD','VGA','Case','PowerSupply','Pc Cooling','Monitor','Headphone','KeyBoards','Mouse'];

Motherboards:Product[]=[];
CPUs:Product[]=[];
RAMs:Product[]=[];
SSDs:Product[]=[];
HDDs:Product[]=[];
VGAs:Product[]=[];
Cases:Product[]=[];
PowerSupplys:Product[]=[];
PcCoolings:Product[]=[];
Monitors:Product[]=[];
Headphones:Product[]=[];
KeyBoards:Product[]=[];
Mouses:Product[]=[];

Products:Product[]=[];
SearchText='';
constructor(public ShopSrv:ShopService)
{

}
Filter(Category:string,Text:string)
{
  //this.Products=this.ShopSrv.products;
  if(Text=='')
  {
    this.Products=this.ShopSrv.products.filter((x)=>{return x.Category==Category});
  }
  if(Text!='')
  {
    this.Products=this.Products.filter((x)=>{return x.Category==Category && x.NAME.includes(Text)});
  }

  switch(Category) {
    case 'RAM': {
      this.RAMs=this.ShopSrv.products.filter((x)=>{return x.Category==Category});
      break;
    }
 }
 }*/
  //processors = ['i7 11th gen', 'i7 10th gen','i5 11th gen'];
  processors = [
    {processorname:'i5', price:20000,},
  ]
   // rams = ['8gb','16gb','32gb'];
   rams = [
    {ramname:'8 gb', price:2050,},
  ]
  hards = [
    {hardname:'1tb ssd', price:500,},
    {hardname:'512gb ssd', price:2840,},
    {hardname:'256 gb ssd', price:3850,},
  ]

   // gpus  = ['gtx 1660ti','gtx 1650ti', 'rtx 3050ti','rtx3060ti'];
   gpus = [
    {gpuname:'gtx 1660ti', price:7000,},
    {gpuname:'gtx 1650ti', price:50050,},
    {gpuname:'rtx 3060ti', price:90040,},
    {gpuname:'rtx 3050ti', price:78000,},
  ]

   //powersupplys = ['450 watt','650 watt','550 watt'];
   powersupplys = [
    {powername:'450 watt', price:700,},
    {powername:'650 watt', price:5000,},
    {powername:'550 watt', price:9050,},
   ]


    total = 0;


   // model = new Hero(15,this.processors[0], this.rams[0], this.hards[0],this.gpus[0],this.powersupplys[0]);

    submitted = false;




    newHero() {
 //     this.model = new Hero(40,'', '', '','','');
    }



    //////// NOT SHOWN IN DOCS ////////

    // Reveal in html:
    //   Name via form.controls = {{showFormControls(heroForm)}}
    showFormControls(form: any) {
      return form && form.controls.name &&
      form.controls.name.value; // Dr. IQ
    }

}
