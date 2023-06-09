import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { DataServiceService } from '../data-service.service';
import { AccueilComponent } from '../accueil/accueil.component';
import { userConnected } from 'src/DataSource/UserConnected';
import { User } from 'src/modele/User';
import { Reservation } from 'src/modele/Reservation';
import { Disponibilite } from 'src/modele/Disponibilite';
import { Evenement } from 'src/modele/Evenement';
import { ServiceUserService } from '../service/service-user.service';
import { ReservationComponent } from '../reservation/reservation.component';
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
    isConnected=false;
    message!:string;
  userName:string="ads";
   User:User=new User(0,"","","","","",new Reservation(0,new Date(),0,new Disponibilite(0,new Date(),false,0),new Evenement(0,"","",0,"")));;
  
   constructor( private  router: Router,private data:DataServiceService ,private userConnected:userConnected, private userService:ServiceUserService) { 
    
    if(this.User.email=="" && localStorage.getItem('user')!=null){
      this.userService.getDataUserId(parseInt(localStorage.getItem("user")??"1")).subscribe((response: any) => {
        this.userConnected.setUser(this.userService.fromJson(response));
        this.User=this.userService.fromJson(response);
        
        
      });
     
     
    }else{
     
      this.User=new User(0,"","","","","",new Reservation(0,new Date(),0,new Disponibilite(0,new Date(),false,0),new Evenement(0,"","",0,"")));
      
    }
    if(this.User.Id==0){
      this.isConnected=false
    }else{
      this.isConnected=true
    }

      
   
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
    this.userConnected.getUserObservable().subscribe(user => {
      this.User=user;
      this.userName = user.prenom;
      if(this.User.Id==0){
        this.isConnected=false
      }else{
        this.isConnected=true
      }
    });
   
}

deconnexion(){
  localStorage.clear();
  this.userConnected.deconnexion();
  this.isConnected=false
 
}
ngAfterViewInit() {
  this.userConnected.getUserObservable().subscribe(user => {
    this.User=user;
    this.userName = user.prenom;
    if(this.User.Id==0){
      this.isConnected=false
    }else{
      this.isConnected=true
    }
  });
  // changes.prop contains the old and the new value...
  }
}