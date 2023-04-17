import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TopBannerComponent } from '../top-banner/top-banner.component';
import { listData } from '../../DataSource/ListData'
import { Evenement } from "src/modele/Evenement";
import { ChauffeurVIP } from "src/modele/ChauffeurVIP";
import { Chalet } from "src/modele/Chalet";
import { DataService } from 'src/dataService/DataService';
import { PleinAir } from "src/modele/PleinAir";
import { Restauration } from "src/modele/Restauration";
import { RouteVin } from "src/modele/RouteVin";
import { Observable, async, of } from 'rxjs';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
 
})

export class AccueilComponent implements OnInit {
  
 
  dataSource: listData = new listData()
  evenement!: Observable<Evenement[]>;
  message!: Observable<string>;
  private x: string = ""
  constructor(private data: DataServiceService) {
    this.data.getMessage.subscribe(value => {
      this.message = of(value);
    });
   }
   choixPackage(message:string){
    switch (message) {
      case "default message": {
        this.evenement = this.eventsToObservable(this.dataSource.routesVins);
        return true;
      }
      case "routevin": {
        this.evenement = this.eventsToObservable(this.dataSource.routesVins);
        return true;
      }
      case "chalet": {
        this.evenement = this.eventsToObservable(this.dataSource.chalets);
        return true;
      }
      case "chauffeur": {
        this.evenement = this.eventsToObservable(this.dataSource.chauffeurs);
        return true;
      }
      case "restaurant": {
        this.evenement = this.eventsToObservable(this.dataSource.restaurations);
        return true;
      }
      case "pleinair": {
        this.evenement = this.eventsToObservable(this.dataSource.pleinAirs);
        return true;
      }
      default: {
        this.evenement = this.eventsToObservable(this.dataSource.routesVins);
        return true;
      }
   }
  }
  public eventsToObservable(events: Evenement[]): Observable<Evenement[]> {
    // Use the `of` function from `rxjs` to create an observable that emits the array of events
    return of(events);
  }
  isChalet(t: Evenement): boolean {
    return t instanceof Chalet;
  }
  isChauffeurVIP(t: Evenement): boolean {
    return t instanceof ChauffeurVIP;
  }
  isPleinAir(t: Evenement): boolean {
    return t instanceof PleinAir;
  }
  isRestauration(t: Evenement): boolean {
    return t instanceof Restauration;
  }
  isRouteVin(t: Evenement): boolean {
    return t instanceof RouteVin;
  }
  
   ngOnInit(){

    console.log(this.message);
    /*switch (this.message) {
      case "default message": {
        this.evenement = this.eventsToObservable(this.dataSource.routesVins);
        break;
      }
      case "routevin": {
        this.evenement = this.eventsToObservable(this.dataSource.routesVins);
        break;
      }
      case "chalet": {
        this.evenement = this.eventsToObservable(this.dataSource.chalets);
        break;
      }
      case "chauffeur": {
        this.evenement = this.eventsToObservable(this.dataSource.chauffeurs);
        break;
      }
      case "restaurant": {
        this.evenement = this.eventsToObservable(this.dataSource.restaurations);
        break;
      }
      case "pleinair": {
        this.evenement = this.eventsToObservable(this.dataSource.pleinAirs);
        break;
      }
      default: {
        this.evenement = this.eventsToObservable(this.dataSource.routesVins);
        break;
      }
    }*/
    // Call the immediately invoked async function expression
  }
}
