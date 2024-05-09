import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConnectService } from '../service/connect.service';
import { DataServiceService } from '../service/data.service.service';
import { Subscription } from 'rxjs';
import { ToCartService } from '../service/to-cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit ,OnDestroy {
  
  item:string[]=[];
  booleanValue: boolean = false;
  private subscription! :Subscription;

  
  constructor(private connectService: ConnectService,
    private dataService:DataServiceService,private toCartService:ToCartService) {}

  ngOnInit(): void {
    this.connectService.getBooleanValueObservable().subscribe(value => {
      this.booleanValue = value;
      console.log('Received Boolean value in HomeComponent:', this.booleanValue);
    });
    this.subscription=this.dataService.array$.subscribe(item=>{
      this.item=item;
      console.log('Received array value in HomeComponent:', this.item );

    })
  }
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

    cartClicked(){
      console.log('cart clicked');
      this.toCartService.sendDataToCart(true)
    }

}
