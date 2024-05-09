import { Component } from '@angular/core';
import { ConnectService } from '../service/connect.service'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  booleanValue: boolean = false;
  constructor(private connectService: ConnectService) {}
  ngOnInit(): void {
    this.connectService.getBooleanValueObservable().subscribe(value => {
      this.booleanValue = value;
      console.log('Received Boolean value in about component:', this.booleanValue);
    });
  }
}
