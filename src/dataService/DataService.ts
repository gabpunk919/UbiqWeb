import {Injectable} from '@angular/core'
import { BehaviorSubject, Observable ,Subject, take} from 'rxjs';
import { Disponibilite } from 'src/modele/Disponibilite';
import { Evenement } from 'src/modele/Evenement';
import { Reservation } from 'src/modele/Reservation';
import { User } from 'src/modele/User';

@Injectable({
    providedIn: 'root'
})
export class DataService{
    private messageSource = new BehaviorSubject<string>("default message");
    currentMessage =this.messageSource.asObservable();
    private userSource = new BehaviorSubject<User>(new User(1,"","","","","",new Reservation(0,new Date(),0,new Disponibilite(0,new Date(),false,0),new Evenement(0,"","",0,""))));
    currentUser=this.userSource.asObservable();
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
    changeMessage(message : string){
        this.messageSource.next(message);
    }
    getMessage():Observable<string>{
        return this.currentMessage;
    }
     getValueFromObservable() {
        return this.currentMessage.pipe(take(1))
           .toPromise()   
    }
}