import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { User } from 'src/modele/User';
import { Observable } from 'rxjs';
import { Reservation } from 'src/modele/Reservation';
import { Disponibilite } from 'src/modele/Disponibilite';
import { Evenement } from 'src/modele/Evenement';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  constructor(private http: HttpClient) { }
  url = ConfigService.getConfig();
  getDataUserAll() {
   
    return this.http.get(this.url + '/User/GetUser');
  }
  getDataUser(email:string,mdp:string) {
    const params = new HttpParams()
    .set('email', email)
    .set('mdp', mdp);
    return this.http.get(this.url + '/User/GetUserByEmailAndMdp',{params});
  }
  getDataUserEmail(email:string) {
    const params = new HttpParams().set('email', email);
    return this.http.get(this.url + '/User/GetByEmail',{params});
  }
  getDataUserId(id:number) {
    const params = new HttpParams()
    .set('id', id);
    return this.http.get(this.url + '/User/GetByID',{params});
  }
  postData( user:User): Observable<any>{
   return this.http.post<any>(this.url + '/User',user.toJson());
  }
   fromJson(json: any): User {
   

    return new User(
      json.id,
      json.nom,
      json.prenom,
      json.telephone,
      json.email,
      json.mdp,
      new Reservation(0,new Date(),0,new Disponibilite(0,new Date(),false,0),new Evenement(0,"","",0,""))
    );
  }
  fromJsonEmail(json: any): User {
    
    if(json.length==0){
      return  new User(0,"","","","","",new Reservation(0,new Date(),0,new Disponibilite(0,new Date(),false,0),new Evenement(0,"","",0,"")));;
    }
    let email=json[0].email;
    let id=json[0].id;
    let mdp=json[0].mdp;
    let nom=json[0].nom;
    let prenom=json[0].prenom;
    let reservation=json[0].reservation;
    let telephone=json[0].telephone;
   console.log(json[0]);
    return new User(
      id,
      nom,
      prenom,
      telephone,
      email,
      mdp,
      new Reservation(0,new Date(),0,new Disponibilite(0,new Date(),false,0),new Evenement(0,"","",0,""))
    );
  }
}
