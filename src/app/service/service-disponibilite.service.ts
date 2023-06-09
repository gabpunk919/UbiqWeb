import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Observable } from 'rxjs';
import { Disponibilite } from 'src/modele/Disponibilite';

@Injectable({
  providedIn: 'root'
})
export class ServiceDisponibiliteService {
  constructor(private http: HttpClient) { }
  url = ConfigService.getConfig();
  
  
  getDisponibilite() {
   
    return this.http.get(this.url + '/Disponibilite');
  }

  getDisponibiliteIdEvenement(idEvenement:number) {
    const params = new HttpParams()
    .set('idEvenement', idEvenement);
    return this.http.get(this.url + '/Disponibilite/idEvenement',{params});
  }
  getDisponibiliteId(id:number) {
    const params = new HttpParams().set('id', id);
    return this.http.get(this.url + '/Disponibilite',{params});
  }

  postData( disponibilite:Disponibilite,idEvenement:number): Observable<any>{
    const params = new HttpParams().set('idEvenement', idEvenement);
   return this.http.post<any>(this.url + '/Disponibilite',disponibilite.toJson(),{params});
  }
   fromJson(json: any): Disponibilite {
   

    return new Disponibilite(
      json.id,
      json.date,
      json.estDispo,
      json.nombrePersonneMax,

    );
  }
  fromJsonList(json: any): Disponibilite[] {
    let list:Disponibilite[] =[];
   json.Results.forEach((element: Disponibilite) => {
    let dispo=new Disponibilite(
      json.id,
      json.date,
      json.estDispo,
      json.nombrePersonneMax,

    );
    list.push(dispo);
});
    return list;
  }
  fromJsonEmail(json: any): Disponibilite {
    
    if(json.length==0){
      return  new  Disponibilite(
        json.id,
        json.date,
        json.estDispo,
        json.nombrePersonneMax,
  
      );
    }
   
    let id=json[0].id;
    let date=json[0].date;
    let estDispo=json[0].estDispo;
    let nombrePersonneMax=json[0].nombrePersonneMax;
   
    return new Disponibilite(
      id,
      date,
      estDispo,
      nombrePersonneMax)
  }
}
