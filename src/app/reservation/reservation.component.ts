import { Component, Input, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from 'src/modele/Evenement';
import { DataServiceService } from '../data-service.service';
import { BehaviorSubject, Observable, Subject, from, map, of, pipe } from 'rxjs';
import { ElementRef } from '@angular/core';
import { userConnected } from 'src/DataSource/UserConnected';
import { ServiceUserService } from '../service/service-user.service';
import { Reservation } from 'src/modele/Reservation';
import { Disponibilite } from 'src/modele/Disponibilite';
import { User } from 'src/modele/User';
import { ServiceDisponibiliteService } from '../service/service-disponibilite.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  evenement: Evenement = new Evenement(0, "", "", 0, "");
  selectedParticipants: number = 0;
  selectedDate: Date = new Date()
  @Input() rating: number = 4;
  @Input() comment: string = "Très Bien comme tours";
  @Input() author: string = "Gab";
  auteur: string = "";
  review: number = 0;
  commentaire: string = "";
  ratingOptions = [1, 2, 3, 4, 5];
  isConnected: boolean = false;
  list: Disponibilite[] = [];
  User: User = new User(0, "", "", "", "", "", new Reservation(0, new Date(), 0, new Disponibilite(0, new Date(), false, 0), new Evenement(0, "", "", 0, "")));


  constructor(private route: Router, private data: DataServiceService, private userConnected: userConnected,
    private userService: ServiceUserService, private disponibleService: ServiceDisponibiliteService) {
    if (this.User.email == "" && localStorage.getItem('user') != null) {
      this.userService.getDataUserId(parseInt(localStorage.getItem("user") ?? "1")).subscribe((response: any) => {
        this.userConnected.setUser(this.userService.fromJson(response));
        this.User = this.userService.fromJson(response);


      });


    } else {

      this.User = new User(0, "", "", "", "", "", new Reservation(0, new Date(), 0, new Disponibilite(0, new Date(), false, 0), new Evenement(0, "", "", 0, "")));

    }
    if (this.User.Id == 0) {
      this.isConnected = false
    } else {
      this.isConnected = true
    }

  }
  submitComment() {
    // TODO: Envoyer le commentaire à l'API ou faire quelque chose avec les données

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
  onStarClick(etoile: number) {

  }

  scrollToComponent() {

    const element = document.getElementById('reserver');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }


  }

  nombreEtoile() {
    return 2;
  }
  Reserver() {
    
    alert("Vous avez Réserver : "+this.evenement.getNom());



  }
  getDisponibilite(idEvenement: number): Disponibilite[] {

    return this.disponibleService.fromJsonList(this.disponibleService.getDisponibiliteIdEvenement(idEvenement));
  }
  /*filterDates = (date: Date, idEvenement: number): boolean => {
    this.list = this.getDisponibilite(idEvenement);

    this.list.forEach((element: Disponibilite) => {
      let dispo = new Disponibilite(
        element.Id,
        element.date,
        element.estDispo,
        element.nombrePersonneMax,
      );
      this.list.push(dispo);
    });
    return this.list;

  }-*/
  ngOnInit(): void {
    this.data.getEvenement().subscribe((evenement: Evenement) => {
      this.evenement = evenement;
    });


    this.userConnected.getUserObservable().subscribe(user => {

      if (this.User.Id == 0) {
        this.isConnected = false

      } else {
        this.isConnected = true

      }
    });
  }
  ngAfterViewInit() {
    this.userConnected.getUserObservable().subscribe(user => {
      this.User = user;

      if (this.User.Id == 0) {
        this.isConnected = false
      } else {
        this.isConnected = true
      }
    });
    // changes.prop contains the old and the new value...
  }
}