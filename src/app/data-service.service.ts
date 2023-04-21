import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Evenement } from 'src/modele/Evenement';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  
  private messageSource = new BehaviorSubject<string>("default message");
  private EvenementSource = new BehaviorSubject<Evenement>(new Evenement(0,"","",0,""));
    constructor(){

    }
    public changeEvenement(newValue: Evenement) {
      this.EvenementSource.next(newValue);
    }
    public getEvenement() {
      return this.EvenementSource.asObservable();
    }
    public changeMessage(newValue: string) {
      this.messageSource.next(newValue);
    }
    get getMessage(){
      return this.messageSource.asObservable();
       
    }

}
