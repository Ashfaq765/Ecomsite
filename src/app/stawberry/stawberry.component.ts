import { Component, OnInit } from '@angular/core';
import { ToCartService } from '../service/to-cart.service';
import { ConnectService } from '../service/connect.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-stawberry',
  templateUrl: './stawberry.component.html',
  styleUrl: './stawberry.component.css',
  // providers:[ToCartService
  // ]
})
export class StawberryComponent implements OnInit {
  booleanValue: boolean = false;
  quantity: number = 1;

  constructor(private tocartservice: ToCartService, private router: Router,
    private connectService: ConnectService) { }

  ngOnInit(): void {
    this.connectService.getBooleanValueObservable().subscribe(value => {
      this.booleanValue = value;
    });

  }
  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  sendDataClicked() {
    this.router.navigate(['login'])
   console.log("boolean inside add to cart",this.booleanValue )
      const dataToSend = {
        product: 'stawberry', number: this.quantity,
        total: this.quantity * 600
      };

      this.tocartservice.sendData(dataToSend);
    
  }


}


