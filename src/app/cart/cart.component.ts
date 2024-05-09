import { Component } from '@angular/core';
import { ToCartService } from '../service/to-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent   {
  receivedData:any;
  Total:number=0;
  Products:string='';
  receivedFromHC=false;
  

  constructor(private toCartService: ToCartService) {
    
    this.toCartService.data$.subscribe(data => {
      this.receivedData = data;
      
      console.log(this.receivedData.product);
      console.log(this.receivedData.number);
      console.log(this.receivedData.total);

      this.Total+=this.receivedData.total;
     this.Products+=this.receivedData.product +', ';
      
    }) 
    
    this.toCartService.Data$.subscribe(Data=>{
      this.receivedFromHC=Data
      console.log(this.receivedFromHC);

    })
  }
  clearCart(){
    this.receivedData = null;
    this.Total = 0;
    this.Products = '';

  }
 
}
