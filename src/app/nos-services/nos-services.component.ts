import { Component, OnInit } from '@angular/core';
import { TopBannerComponent } from '../top-banner/top-banner.component';
import { PleinAir } from 'src/modele/PleinAir';
import { Chalet } from 'src/modele/Chalet';
import { ChauffeurVIP } from 'src/modele/ChauffeurVIP';
import { Evenement } from 'src/modele/Evenement';
import { Restauration } from 'src/modele/Restauration';
import { RouteVin } from 'src/modele/RouteVin';
import { listData } from 'src/DataSource/ListData';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-nos-services',
  templateUrl: './nos-services.component.html',
  styleUrls: ['./nos-services.component.css']
})
export class NosServicesComponent implements OnInit {
  dataSource: listData = new listData()
  
  evenementVin:RouteVin[]=this.dataSource.routesVins;
  evenementChauffeur:ChauffeurVIP[]=this.dataSource.chauffeurs;
  evenementPleinAirs:PleinAir[]=this.dataSource.pleinAirs;
  evenementRestaurant:Restauration[]=this.dataSource.restaurations;
  evenementChalet:Chalet[]=this.dataSource.chalets;
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
  constructor(private data: DataServiceService) {
   
   }
   donneEvenement(t: Evenement){
    this.data.changeEvenement(t);
  }
  ngOnInit(): void {
    
    
  }

}
