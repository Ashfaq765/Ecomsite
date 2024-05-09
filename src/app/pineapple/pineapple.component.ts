import { Component, OnInit } from '@angular/core';
import { ToCartService } from '../service/to-cart.service';



@Component({
  selector: 'app-pineapple',
  templateUrl: './pineapple.component.html',
  styleUrl: './pineapple.component.css',
  providers:[ToCartService]
})
export class PineappleComponent  {

}
