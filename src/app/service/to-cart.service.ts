import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToCartService {
   dataSubject = new Subject<any>();
   datasubject2 = new BehaviorSubject<boolean>(false);

  sendData(data: any) {
    this.dataSubject.next(data);
    //  console.log(data)

  }
  sendDataToCart(Data: boolean) {
    this.datasubject2.next(Data)

  }

  data$ = this.dataSubject.asObservable();
  Data$ = this.datasubject2.asObservable();
}
