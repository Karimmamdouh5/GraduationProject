import { ShopSinglePageComponent } from './Pages/ShopSingle/shop-single-page/shop-single-page.component';
import { ContactPageComponent } from './Pages/Contact/Components/contact-page/contact-page.component';
import { ShopPageComponent } from './Pages/Shop/Components/shop-page/shop-page.component';
import { AboutPageComponent } from './Pages/About/Components/about-page/about-page.component';
import { HomePageComponent } from './Pages/Home/Components/home-page/home-page.component';
import { MainLayoutComponent } from './Shared/MainLayout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartModelComponent } from './Pages/Cart/cart-model/cart-model.component';
import { RecommendationBundles } from './Classes/recommendation-bundles';
import { RecommendationBundlesComponent } from './Pages/BuyPcOrLaptop/Components/recommendation-bundles/recommendation-bundles.component';
const routes: Routes =
[
  {path:'',component:MainLayoutComponent,children:
  [
    {path:'',component:HomePageComponent},
    {path:'Home',component:HomePageComponent},
    {path:'About',component:AboutPageComponent},
    {path:'Shop',component:ShopPageComponent},
    {path:'Contact',component:ContactPageComponent},
    {path:'ShopSingle',component:ShopSinglePageComponent},
    {path:'Cart',component:CartModelComponent},
    {path:'BuyPcOrLaptop',component:RecommendationBundlesComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
