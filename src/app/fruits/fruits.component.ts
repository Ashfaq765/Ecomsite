import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../service/connect.service'

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css'
})
export class FruitsComponent {
  isClicked=false;

  constructor(private router:Router){}
  booleanValue: boolean = false;
  
  ngOnInit(): void {
     
  }

  onClickStawberry(){
    console.log('image clicked');
    this.isClicked=true;
    setTimeout(()=>{
      this.isClicked=false;
    },200)

    this.router.navigate(['/stawberry'])
    

  }
  onClickpineapple(){
    console.log('image1 clicked');
    this.isClicked=true;
    setTimeout(()=>{
      this.isClicked=false;
    },200)

    this.router.navigate(['/pineapple'])
  }

  onClickMixfruit(){
    console.log('image2 clicked');
    this.isClicked=true;
    setTimeout(()=>{
      this.isClicked=false;
    },200)

    this.router.navigate(['/mixfruit'])

  }

}
