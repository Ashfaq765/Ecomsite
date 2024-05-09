import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
 
  private arraysourse=new BehaviorSubject<string[]>([])

    //send an array to home component
    array$=this.arraysourse.asObservable();
 
  //method to update an array
  updatearray(newArray:string[]):void{
    this.arraysourse.next(newArray)
 console.log('new array',newArray)
  }



}
