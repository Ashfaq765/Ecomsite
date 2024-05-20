import { Component } from '@angular/core';
import { ConnectService } from '../service/connect.service'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  booleanValue: boolean = false;
  constructor() {}
  ngOnInit(): void {
   
  }
}
