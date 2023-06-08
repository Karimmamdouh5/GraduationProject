import { CartSnackBarComponent } from './Pages/Shop/Components/cart-snack-bar/cart-snack-bar.component';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CartModelComponent } from './Pages/Cart/cart-model/cart-model.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RecommendationBundlesComponent } from './Pages/BuyPcOrLaptop/Components/recommendation-bundles/recommendation-bundles.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { BuildYourPcComponent } from './Pages/BuildYourPc/Components/build-your-pc/build-your-pc.component';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import {PaginatorModule} from 'primeng/paginator';
import {AccordionModule} from 'primeng/accordion';
import {MatPaginatorModule ,PageEvent} from '@angular/material/paginator';
import { MatSpinnerComponent } from './Shared/mat-spinner/mat-spinner.component';
import {MatProgressSpinnerModule, MatSpinner}from '@angular/material/progress-spinner'
import { InterceptorService } from './Services/interceptor.service';
import { RecommedntaioSectionComponent } from './Shared/recommedntaio-section/recommedntaio-section.component';
import { RelatedProductsSectionComponent } from './Shared/related-products-section/related-products-section.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { RelatedProductsComponent } from './Pages/ShopSingle/related-products/related-products.component';
import { SignUpComponent } from './Shared/sign-up/sign-up.component';
import { SignInComponent } from './Shared/sign-in/sign-in.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import { CartStepperComponent } from './Pages/Cart/cart-stepper/cart-stepper.component';
import { ReactiveFormsModule } from '@angular/forms';





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
    RecommendationBundlesComponent,
    BuildYourPcComponent,
    MatSpinnerComponent,
    RecommedntaioSectionComponent,
    RelatedProductsSectionComponent,
    RelatedProductsComponent,
    SignUpComponent,
    SignInComponent,
    CartStepperComponent
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
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    PaginatorModule,
    AccordionModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatExpansionModule,
    MatRadioModule,
    MatStepperModule,  
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [HttpClientModule,
    MatSpinner,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
