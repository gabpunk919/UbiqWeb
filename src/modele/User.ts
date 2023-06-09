import { Reservation } from './Reservation';

export class User {
  public Id: number;
  public nom: string;
  public prenom: string;
  public telephone: string;
  public email: string;
  public mdp: string;
  public reservation: Reservation;

  constructor(
    Id: number,
    nom: string,
    prenom: string,
    telephone: string,
    email: string,
    mdp: string,
    reservation: Reservation
  ) {
    this.Id = Id;
    this.nom = nom;
    this.prenom = prenom;
    this.telephone = telephone;
    this.email = email;
    this.mdp = mdp;
    this.reservation = reservation;
  }
  toJson(): object {
    return {
      id: this.Id,
      nom: this.nom,
      prenom: this.prenom,
      telephone: this.telephone,
      email: this.email,
      mdp:this.mdp,
      reservation:this.reservation.toJson()
    };
}
}