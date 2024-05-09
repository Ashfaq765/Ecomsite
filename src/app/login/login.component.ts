import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../service/connect.service';
import { DataServiceService } from '../service/data.service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  //providers: [ConnectService]

})
export class LoginComponent implements OnInit {
  name: string = '';
  password: string = '';
  isValidName: boolean = true;
  isValidPassword: boolean = true;
  isLoginSuccessful: boolean = false;
  loginDesable: boolean = true;

  //sending array items
  private items=['apple','bannana','cherry'];

  constructor(private exampleService: ConnectService, private router: Router,
    private dataService:DataServiceService) { }

  isButtonPressed() {
    if (this.name === 'Ashfaq' && this.password === '123') {
      console.log('Login successful');
      this.isLoginSuccessful = true;
      this.loginDesable = false;
      // Navigate to home page or perform any other action upon successful login
      this.router.navigate(['']);
      this.exampleService.receiveBooleanValue(this.isLoginSuccessful);
    } else {
      console.log('Login failed');
    }
  }
  //send the array
  sendArray():void{
    this.dataService.updatearray(this.items)
  } 
  ngOnInit(): void { }

}
