import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import{CourseGuardService}  from './course-guard.service'
import {AuthService}  from './auth.service';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { VegetablesComponent } from './products/vegetables/vegetables.component';
import { FruitsComponent } from './fruits/fruits.component';
import { Test2Component } from './test2/test2.component';
import { StawberryComponent } from './stawberry/stawberry.component';
import { PineappleComponent } from './pineapple/pineapple.component';
import { MixfruitComponent } from './mixfruit/mixfruit.component';
import { CartComponent } from './cart/cart.component';
import { ToCartService } from './service/to-cart.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactComponent,
    LoginComponent,
    TestComponent,
    VegetablesComponent,
    FruitsComponent,
    Test2Component,
    StawberryComponent,
    PineappleComponent,
    MixfruitComponent,
    CartComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),CourseGuardService,AuthService,ToCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
