import { Injectable } from '@angular/core';
import { RecommendationBundles } from '../Classes/recommendation-bundles';

@Injectable({
  providedIn: 'root'
})
export class BundelsRecommendationService {


purpose='';
DeviceType='';
Purposes=
[
  'Low end gaming','Mid Range gaming','High end gaming','Education','Content creator'
];
ComputerTypes=['Pc','Laptop'];
  constructor() { }

  Bundels : RecommendationBundles[]=
  [
    {
      Name:'Low End Gaming Pc Build #1' ,
      Purpose:'Low end gaming',
      Description:
      `
      Processor: Ryzen 5 4650G Tray
      Motherboard GigabyteB B450M-S2H
      Ram: Crucial 8GB DDR4
      SSD : 128GB lexar
      Case + PSU : Thermaltake V200 + 600W
      `,
      Price:10499 ,
      Image:'Lowendgamingpcbuild1.jpg',
      DeviceType:'Pc'
    },
    {
      Name:'Mid Range Gaming pc build #1' ,
      Purpose:'Mid Range gaming',
      Description:
      `
      Processor: intel Core i5 10400F
      Motherboard : ASUS H510M
      Ram: 16GB DDR4
      HDD: 1TB
      SSD :  lexar lns100 128g
      VGA: RTX 3050 8GB
      Case + PSU : NX292+550W
      `,
      Price:24999 ,
      Image:'MidRangeGamingpcbuild1.jpg',
      DeviceType:'Pc'
    },
    {
      Name:'Mid Range Gaming pc build #2' ,
      Purpose:'Mid Range gaming',
      Description:
      `
      Processor: Core i5 12400F
      Motherboard: ASUS B660M K D4
      RAM:  16GB ddr4
      VGA: RTX 3060 12GB
      HDD: 1tb
      SSD: 128GB
      CASE & PSU: DF800+650W
      `,
      Price:28999 ,
      Image:'Midrangegamingpcbuild2.jpg',
      DeviceType:'Pc'
    },
    {
      Name:'HIGH END GAMING PC BUILD #1' ,
      Purpose:'High end gaming',
      Description:
      `
      Processor: Intel Core i7 12700KF
      Motherboard: GIGABYTE Z690 DS3H DDR4
      Vga: ZOTAC RTX 3060 Twin Edge OC
      Ram: Aorus 2x 8GB DDR4 3333MHZ RGB
      SSD: GIGABYTE-480GB-GP
      Cooler: Cooling Liquid Antec Symphony 240MM ARGB
      Case + PSU: Corsair 220T + Cougar 600W White
      `,
      Price:38700 ,
      Image:'HIGHENDGAMINGPCBUILD1.jpg',
      DeviceType:'Pc'
    },
    {
      Name:'HIGH END GAMING PC BUILD #2' ,
      Purpose:'High end gaming',
      Description:
      `
      Processor : Ryzen 7 5800X
      Motherboard : B550 Elite AX V2
      vga: RTX 3060Ti
      Ram: 16GB DDR4
      cooler: Antec 240M
      HDD: 1TB
      SSD : 256GB
      Case + PS : DF800+650W
      `,
      Price:43900 ,
      Image:'HighEndGamingpc2.jpg',
      DeviceType:'Pc'
    },
    {
      Name:'Content Creator PC BUILD' ,
      Purpose:'Content creator',
      Description:
      `
      Processor:  Intel i9 12900KF
      Motherboard: ROG STRIX Z690-A GAMING WIFI D4
      Vga: RTX 3070 8GB
      Ram: 4X16GB Patriot VIPER 3200MHz DDR4
      SSD :PATRIOT P300 512G NVME
      HDD: 2TB Seagate
      Case + PS : View 37 ARGB Edition + 750W GOLD
      Cooling: XIGMATEK Liquid Killer X 240 ARGB
      `,
      Price:10499 ,
      Image:'ContentCreatorPCBUILD.jpg',
      DeviceType:'Pc'
    },
    {
      Name:'Asus X415EP-FP007W ' ,
      Purpose:'Education',
      Description:
      `
      processor:  Intel Ci7(1165G7)
      Ram: 8GB
      ssd: 512GB
      vga: MX350 2GB
      Display: 14″ FHD
      SKU: X415EP-FP007W
      `,
      Price:22000 ,
      Image:'EducationProgrammingEntertainment.jpg',
      DeviceType:'Laptop'
    },
    {
      Name:'Asus Vivobook Pro15 D3500QC' ,
      Purpose:'Content creator',
      Description:
      `
      processor:Ryzen7(5800H)
      Ram:16 GB
      ssd: 512GB SSD
      vga:RTX3050 4G
      Display: 15.6″FHD OLED
      SKU:D3500QC-OLED007W
      `,
      Price:30999 ,
      Image:'EducationProgrammingEntertainment2.jpg',
      DeviceType:'Laptop'
    },
    {
      Name:'Dell G15-5511',
      Purpose:'Content creator',
      Description:
      `
      processor: Intel Ci7(11800H)
      ram :16GB
      Storage: 512GB SSD
      Graphic card : RTX 3060 6G
      Display: 15.6 ” FHD
      SKU: G15-5511
      `,
      Price:10499 ,
      Image:'GraphicdesigningrenderingGaming.jpg',
      DeviceType:'Laptop'
    },
  ];

  FilteredBundels:RecommendationBundles[]=[];

  Recommend(Purpose:string,DeviceType:string)
  {
    if(Purpose==''&&DeviceType!='')
    {
      this.FilteredBundels=this.Bundels.filter((x)=>{return x.DeviceType===DeviceType});
    }
    if(DeviceType==''&&Purpose!='')
    {
      this.FilteredBundels=this.Bundels.filter((x)=>{return x.Purpose===Purpose});
    }
    if(Purpose !='' && DeviceType!='')
    {
      this.FilteredBundels=this.Bundels.filter((x)=>{return x.Purpose===Purpose&&x.DeviceType===DeviceType});
    }
  }

}
