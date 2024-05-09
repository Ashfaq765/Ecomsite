import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../service/connect.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  booleanValue: boolean = false;
  constructor(private connectService: ConnectService) {}
  ngOnInit(): void {
    this.connectService.getBooleanValueObservable().subscribe(value => {
      this.booleanValue = value;
      console.log('Received Boolean value in about component:', this.booleanValue);
    });
  }

}
