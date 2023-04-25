import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { Component } from '@angular/core';
import { ShopSingleService } from 'src/app/Services/shop-single.service';

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.scss']
})
export class DescriptionSectionComponent {
  constructor(public ShopSingleSrv:ShopSingleService,public CartSrv:CartService,public router:Router)
  {
  }

  BackToShop()
  {
    this.router.navigate(['/Shop']);
  }
}
