import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  private booleanValueSubject = new BehaviorSubject<boolean>(false);
  private arraysourse=new BehaviorSubject<string[]>([])

  //receive boolean value from login component
  receiveBooleanValue(value: boolean): void {
    this.booleanValueSubject.next(value);
  }
  //method to update an array
  updatearray(newArray:string[]){
    this.arraysourse.next(newArray)

  }
// send boolean value to home component
  getBooleanValueObservable() {
    return this.booleanValueSubject;
  }
  //send an array to home component
  array$=this.arraysourse.asObservable();
}
