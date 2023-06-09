import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Partenaire } from 'src/modele/Partenaire';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicePartenaireService {

  constructor(private http: HttpClient) { }
   url = ConfigService.getConfig();
  getData() {
   
    return this.http.get(this.url + '/Partenaire');
  }
  postData( partenaire:Partenaire): Observable<any>{
   return this.http.post<any>(this.url + '/Partenaire',partenaire.toJson());
  }
}
