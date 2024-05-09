import { Component,EventEmitter,Output,OnInit } from '@angular/core';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.css'
})
export class Test2Component implements OnInit {
  //Array to sent
  items:string[]=[];
  userInput:string='';
  

  //event emitter to send data to parent
  @Output()sendArray=new EventEmitter<string[]>();
  

  constructor(){}
  ngOnInit():void{
  
    this.sendArray.emit(this.items);


  }
  updateUserInput(){
    if(this.userInput.length!=0){
     
    this.items.push(this.userInput);
    console.log(this.userInput.length)

    this.userInput='';
    }
  }
  updateUserInputpop(){
    this.items.pop();
  }

  }


