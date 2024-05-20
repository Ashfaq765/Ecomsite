
import { AuthService } from './auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConnectService } from './service/connect.service';
import { DataServiceService } from './service/data.service.service';
import { Subscription } from 'rxjs';
import { ToCartService } from './service/to-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit ,OnDestroy {
  title = 'router';
  // constructor(private authService:AuthService){

  // }
  item:string[]=[];
  booleanValue: boolean = false;
  private subscription! :Subscription;

  
  constructor(private connectService: ConnectService,
    private dataService:DataServiceService,private toCartService:ToCartService) {}

  ngOnInit(): void {
    
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
  // login(){
  // this.authService.login();
  // }
  // logout(){
  //   this.authService.logout();
  //   }
}
