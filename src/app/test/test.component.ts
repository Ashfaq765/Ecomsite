import { Component } from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  
  receivedItems:string[]=[];
  receiveArray(items:string[]){
    this.receivedItems=items;
  }
  constructor(){}
  
  // Example usage where you set a string value and send it to the service
  //someMethod(): void {
    // Set your string value here
    //const booleanValue = true;

    // Call the method in the service and pass the string value
   // this.sendBooleanValueToService(booleanValue);
  //}
  


}
