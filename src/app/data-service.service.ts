import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  private messageSource = new BehaviorSubject<string>("default message");
  
    constructor(){

    }
   
    public changeMessage(newValue: string) {
      this.messageSource.next(newValue);
    }
    get getMessage(){
      return this.messageSource.asObservable();
       
    }

}
