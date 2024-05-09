
import { Component, OnInit } from '@angular/core';
import { ToCartService } from '../service/to-cart.service';
import { ConnectService } from '../service/connect.service'

@Component({
  selector: 'app-mixfruit',
  templateUrl: './mixfruit.component.html',
  styleUrl: './mixfruit.component.css'
})
export class MixfruitComponent  implements OnInit{
  booleanValue: boolean = false;
  quantity: number = 1;
  constructor(private tocartservice: ToCartService,
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
  sendDataClicked(){
  const dataToSend = { product: 'Mix Fruit', number: this.quantity ,total :this.quantity*1000};;
  this.tocartservice.sendData(dataToSend);
  }

}
