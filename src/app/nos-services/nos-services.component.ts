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
import { ServiceEvenementService } from '../service/service-evenement.service';

@Component({
  selector: 'app-nos-services',
  templateUrl: './nos-services.component.html',
  styleUrls: ['./nos-services.component.css']
})
export class NosServicesComponent implements OnInit {
   dataSource: listData;
 
  evenementVin:RouteVin[]=[];
  evenementChauffeur:ChauffeurVIP[]=[];
  evenementPleinAirs:PleinAir[]=[];
  evenementRestaurant:Restauration[]=[];
  evenementChalet:Chalet[]=[];
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
  constructor(private data: DataServiceService,private evenementService : ServiceEvenementService) {
    evenementService.remplirListData();
    this.dataSource=evenementService.dataSource;
    this.evenementVin=this.dataSource.routesVins;
    this.evenementChauffeur=this.dataSource.chauffeurs;
    this.evenementPleinAirs=this.dataSource.pleinAirs;
    this.evenementRestaurant=this.dataSource.restaurations;
    this.evenementChalet=this.dataSource.chalets;
   }
   donneEvenement(t: Evenement){
    this.data.changeEvenement(t);
  }
  ngOnInit(): void {
   
    
  }

}
