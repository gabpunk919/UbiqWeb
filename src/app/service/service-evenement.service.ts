import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { Evenement } from 'src/modele/Evenement';
import { Restauration } from 'src/modele/Restauration';
import { RouteVin } from 'src/modele/RouteVin';
import { PleinAir } from 'src/modele/PleinAir';
import { Chalet } from 'src/modele/Chalet';
import { ChauffeurVIP } from 'src/modele/ChauffeurVIP';
import { listData } from 'src/DataSource/ListData';

@Injectable({
  providedIn: 'root'
})
export class ServiceEvenementService {

  constructor(private http: HttpClient) {}

  data: string = '';
  dataSource: listData = new listData();

  getData() {
    let url = ConfigService.getConfig();
    return this.http.get(url + '/Evenement');
  }

  remplirListData() {
    this.getData().subscribe(data => {
      let list = this.convertJsonToObjects(data);
      for (const item of list) {
        if (item instanceof Restauration) {
          this.dataSource.restaurations.push(item);
        } else if (item instanceof PleinAir) {
          this.dataSource.pleinAirs.push(item);
        } else if (item instanceof ChauffeurVIP) {
          this.dataSource.chauffeurs.push(item);
        } else if (item instanceof Chalet) {
          this.dataSource.chalets.push(item);
        } else if (item instanceof RouteVin) {
          this.dataSource.routesVins.push(item);
        }
      }
    });
  }

  convertJsonToObjects(jsonData: any): any[] {
    const objects: any[] = [];
    let obj: Evenement;

    for (const item of jsonData) {
      switch (item.typeEvenement) {
        case 'restauration':
          obj = new Restauration(item.id, item.nom, item.description, item.prix, item.photos[0].link);
          break;
        case 'chauffeur':
          obj = new ChauffeurVIP(item.id, item.nom, item.description, item.prix, item.photos[0].link);
          break;
        case 'chalet':
          obj = new Chalet(item.id, item.nom, item.description, item.prix, item.photos[0].link);
          break;
        case 'pleinAir':
          obj = new PleinAir(item.id, item.nom, item.description, item.prix, item.photos[0].link);
          break;
        case 'routeVin':
          obj = new RouteVin(item.id, item.nom, item.description, item.prix, item.photos[0].link);
          break;
        default:
          obj = new Evenement(0, '', '', 0, 'S');
          break;
      }

      objects.push(obj);
    }

    return objects;
  }
}
