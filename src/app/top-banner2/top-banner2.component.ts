import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { DataServiceService } from '../data-service.service';
import { AccueilComponent } from '../accueil/accueil.component';
@Component({
  selector: 'app-top-banner2',
  templateUrl: './top-banner2.component.html',
  styleUrls: ['./top-banner2.component.css']
})

export class TopBanner2Component implements OnInit {
  selectedBackground: string = '../../assets/routeVin.jpg';
  url ="";
  typeEvenement=""
  activeTab = 'home'
  search : String ="";
    faCoffee = faCoffee;

    message!:string;
 
  constructor( private  router: Router,private data:DataServiceService  ) { 
      
  }
  

  changeBackground(backgroundUrl: string,typeEvenement:string) {
    this.selectedBackground = backgroundUrl;
    this.updateValue(typeEvenement);
   
    
  }
  isHomeRoute() {
    return this.router.url === '/';
  }
 
  public updateValue(value:string) {
    this.data.changeMessage(value);}
   ngOnInit(){
   
  
   
}
}