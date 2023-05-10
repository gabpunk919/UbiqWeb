import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private  router: Router,private data:DataServiceService  ) { }

  ngOnInit(): void {
  }
   changePage(type:string){
    this.router.navigateByUrl('magasiner');
    this.updateValue(type);
  }
  public updateValue(value:string) {
    this.data.changeMessage(value);}
}
