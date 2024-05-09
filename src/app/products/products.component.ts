import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../service/connect.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  booleanValue: boolean = false;
  constructor(private connectService: ConnectService) {}
  ngOnInit(): void {
    this.connectService.getBooleanValueObservable().subscribe(value => {
      this.booleanValue = value;
      console.log('Received Boolean value in productComponent:', this.booleanValue);
    });
  }
}
