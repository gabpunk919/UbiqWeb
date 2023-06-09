import { Disponibilite } from './Disponibilite';
import { Evenement } from './Evenement';

export class Reservation {
  public Id: number;
  public date: Date;
  public nombrePersonne: number;
  public disponibilite: Disponibilite;
  public evenement: Evenement;

  constructor(
    Id: number,
    date: Date,
    nombrePersonne: number,
    disponibilite: Disponibilite,
    evenement: Evenement
  ) {
    this.Id = Id;
    this.date = date;
    this.nombrePersonne = nombrePersonne;
    this.disponibilite = disponibilite;
    this.evenement = evenement;
  }

  toJson(): object {
    return {
      id: this.Id,
      date: this.date,
      nombrePersonne: this.nombrePersonne,
      disponibilite: this.disponibilite.toJson(),
      evenement: this.evenement.toJson(),
      
    };
}
}