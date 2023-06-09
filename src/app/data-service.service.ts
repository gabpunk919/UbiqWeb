import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Disponibilite } from 'src/modele/Disponibilite';
import { Evenement } from 'src/modele/Evenement';
import { Reservation } from 'src/modele/Reservation';
import { User } from 'src/modele/User';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private userSource = new BehaviorSubject<User>(new User(1,"","","","","",new Reservation(0,new Date(),0,new Disponibilite(0,new Date(),false,0),new Evenement(0,"","",0,""))));
  currentUser=this.userSource.asObservable();
  private messageSource = new BehaviorSubject<string>("default message");
  private EvenementSource = new BehaviorSubject<Evenement>(new Evenement(0,"","",0,""));
    constructor(){

    }
    connectUser(user:User){
      this.userSource.next(user);
  }
  getUser():Observable<User>{
      return this.currentUser;
  }
  getValueUserFromObservable() {
      return this.currentUser.pipe(take(1))
         .toPromise()   
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
