import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})

export class TopBannerComponent implements OnInit {
  selectedBackground: string = '../../assets/routeVin.jpg';
  url ="";
  message = "Bienvenue sur notre site!";
  activeTab = 'home'
  search : String ="";
    faCoffee = faCoffee;
  constructor( private  router: Router  ,
    private activatedRoute: ActivatedRoute) { 
      
  }
  

  changeBackground(backgroundUrl: string) {
    this.selectedBackground = backgroundUrl;
  }
  isHomeRoute() {
    return this.router.url === '/';
  }
  ngOnInit(): void {

}
}