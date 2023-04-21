import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evenement } from 'src/modele/Evenement';
import { DataServiceService } from '../data-service.service';
import { of } from 'rxjs';
import {ElementRef } from '@angular/core';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  evenement: Evenement=new Evenement(0,"","",0,"");
  selectedParticipants:number=0;
  selectedDate:Date=new Date()
  @Input() rating: number =4;
  @Input() comment: string ="Très Bien comme tours";
  @Input() author: string ="Gab";
  auteur: string="";
  review: number=0;
  commentaire: string="";
  ratingOptions = [1, 2, 3, 4, 5];
  constructor(private route: ActivatedRoute,private data: DataServiceService) { 
  
  }
  submitComment() {
    // TODO: Envoyer le commentaire à l'API ou faire quelque chose avec les données
    console.log(`Auteur: ${this.auteur}, Note: ${this.review}, Commentaire: ${this.commentaire}`);
    this.auteur = '';
    this.review = 0;
    this.commentaire = '';
  }
  getStars(): boolean[] {
    const stars = [false, false, false, false, false];
    for (let i = 0; i < this.rating; i++) {
      stars[i] = true;
    }
    return stars;
  }
  onStarClick(etoile:number){

  }
  scrollToComponent(){
    const element = document.getElementById('reserver');
    if (element) {
    element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
  }
  nombreEtoile(){
    return 2;
  }
  Reserver(){

  }
  ngOnInit(): void {
    this.data.getEvenement().subscribe((evenement: Evenement) => {
      this.evenement = evenement;
    });
  
  }

}
