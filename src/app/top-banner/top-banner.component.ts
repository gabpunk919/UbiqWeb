import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { DataServiceService } from '../data-service.service';
import { AccueilComponent } from '../accueil/accueil.component';
@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})

export class TopBannerComponent implements OnInit {
  selectedBackground: string = '../../assets/logo2.png';
  url ="";
  typeEvenement=""
  activeTab = 'home'
  search : String ="";
    faCoffee = faCoffee;

    message!:string;
 
  constructor( private  router: Router,private data:DataServiceService  ) { 
      
  }
  

  changeBackground(backgroundUrl: string,typeEvenement:string) {
    this.selectedBackground = "../../assets/logo2.png";
    
    
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