import { Component, ViewChild } from '@angular/core';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { NavigationEnd, Router } from '@angular/router';
import { userConnected } from 'src/DataSource/UserConnected';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ubiq';
  searchTerm: string = '';
  ShowHeader:boolean=true;
constructor(private router : Router,private userConnected:userConnected){
router.events.subscribe((val)=>{
  if(val instanceof NavigationEnd){
    if(val.url == '/accueil2')
  {
    this.ShowHeader=false;
  }else{
    this.ShowHeader=true;
  }}
})
}
search(): void {
  console.log('Recherche pour:', this.searchTerm);
  // Ajouter ici la logique de recherche
}
}
