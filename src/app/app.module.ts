import { CartSnackBarComponent } from './Pages/Shop/Components/cart-snack-bar/cart-snack-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainLayoutComponent } from './Shared/MainLayout/main-layout/main-layout.component';
import { HeaderComponent } from './Shared/Header/header/header.component';
import { FooterComponent } from './Shared/Footer/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './Pages/Home/Components/home-page/home-page.component';
import { HeroCarouselComponent } from './Pages/Home/Components/hero-carousel/hero-carousel.component';
import { CategoriesComponent } from './Pages/Home/Components/categories/categories.component';
import { FeaturedProductsComponent } from './Pages/Home/Components/featured-products/featured-products.component';
import { AboutUsComponent } from './Pages/About/Components/about-us/about-us.component';
import { AboutPageComponent } from './Pages/About/Components/about-page/about-page.component';
import { OurServicesComponent } from './Pages/About/Components/our-services/our-services.component';
import { OurBrandsComponent } from './Pages/About/Components/our-brands/our-brands.component';
import { ShopPageComponent } from './Pages/Shop/Components/shop-page/shop-page.component';
import { ShopProductsComponent } from './Pages/Shop/Components/shop-products/shop-products.component';
import { ShopCategoriesComponent } from './Pages/Shop/Components/shop-categories/shop-categories.component';
import { ContactUsComponent } from './Pages/Contact/Components/contact-us/contact-us.component';
import { ContactPageComponent } from './Pages/Contact/Components/contact-page/contact-page.component';
import { ContactMapComponent } from './Pages/Contact/Components/contact-map/contact-map.component';
import { ContactFormComponent } from './Pages/Contact/Components/contact-form/contact-form.component';
import { ShopSinglePageComponent } from './Pages/ShopSingle/shop-single-page/shop-single-page.component';
import { PicturesSectionComponent } from './Pages/ShopSingle/pictures-section/pictures-section.component';
import { DescriptionSectionComponent } from './Pages/ShopSingle/description-section/description-section.component'
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartModelComponent } from './Pages/Cart/cart-model/cart-model.component';
import {MatSnackBarModule} from '@angular/material/snack-bar'


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    HeroCarouselComponent,
    CategoriesComponent,
    FeaturedProductsComponent,
    AboutUsComponent,
    AboutPageComponent,
    OurServicesComponent,
    OurBrandsComponent,
    ShopPageComponent,
    ShopProductsComponent,
    ShopCategoriesComponent,
    ContactUsComponent,
    ContactPageComponent,
    ContactMapComponent,
    ContactFormComponent,
    ShopSinglePageComponent,
    PicturesSectionComponent,
    DescriptionSectionComponent,
    CartModelComponent,
    CartSnackBarComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    MatTreeModule,
    MatIconModule,
    MatSnackBarModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
