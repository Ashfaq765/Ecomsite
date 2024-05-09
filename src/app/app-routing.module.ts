import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { CourseGuardService } from './course-guard.service'
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './products/vegetables/vegetables.component';
import { TestComponent } from './test/test.component';
import { StawberryComponent } from './stawberry/stawberry.component';
import { PineappleComponent } from './pineapple/pineapple.component';
import { MixfruitComponent } from './mixfruit/mixfruit.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'contact', component: ContactComponent,//canActivate:[CourseGuardService]

  },
  { path: 'fruits', component: FruitsComponent },
  { path: 'vegetables', component: VegetablesComponent },
  { path: 'test', component: TestComponent },
  { path: 'stawberry', component: StawberryComponent },
  { path: 'pineapple', component: PineappleComponent },
  { path: 'mixfruit', component: MixfruitComponent },
  { path: 'cart', component: CartComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
