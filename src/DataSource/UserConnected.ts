import { Evenement } from "../modele/Evenement";
import { ChauffeurVIP } from "../modele/ChauffeurVIP";
import { Chalet } from "../modele/Chalet";

import { PleinAir } from "src/modele/PleinAir";
import { Restauration } from "src/modele/Restauration";
import { RouteVin } from "src/modele/RouteVin";
import { User } from "src/modele/User";
import { Disponibilite } from "src/modele/Disponibilite";
import { Reservation } from "src/modele/Reservation";
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class userConnected {
    private userSubject: Subject<User> = new Subject<User>();
    constructor( @Optional() @SkipSelf() shareService?:userConnected) {
       if(shareService){
            throw new Error('USER SERVICE DOWN');;

       }
       console.info('UserConnected Service Created');
    }
      user:User=new User(0,"","","","","",new Reservation(0,new Date(),0,new Disponibilite(0,new Date(),false,0),new Evenement(0,"","",0,"")));
      setUser(user:User): void {
        this.user=user;
        this.userSubject.next(user);
       
    }
     deconnexion(){
        this.user==new User(0,"","","","","",new Reservation(0,new Date(),0,new Disponibilite(0,new Date(),false,0),new Evenement(0,"","",0,"")));
        this.userSubject.next(this.user);
        
    }
     getUser(): User {
        return this.user;
    }
    getUserObservable(): Observable<User> {
        return this.userSubject.asObservable();
      }
}