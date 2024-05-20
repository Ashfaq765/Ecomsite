import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CourseGuardService } from './course-guard.service'
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './products/vegetables/vegetables.component';
import { TestComponent } from './test/test.component';
import { StawberryComponent } from './stawberry/stawberry.component';
import { PineappleComponent } from './pineapple/pineapple.component';
import { MixfruitComponent } from './mixfruit/mixfruit.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contact', component: ContactComponent,//canActivate:[CourseGuardService]

  },
  { path: 'fruits', component: FruitsComponent },
  { path: 'vegetables', component: VegetablesComponent },
  { path: 'test', component: TestComponent },
  { path: 'stawberry', component: StawberryComponent },
  { path: 'pineapple', component: PineappleComponent },
  { path: 'mixfruit', component: MixfruitComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
