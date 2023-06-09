export class Disponibilite {
    public Id: number;
    public date: Date;
    public estDispo: boolean;
    public nombrePersonneMax: number;
  
    constructor(
      Id: number,
      date: Date,
      estDispo: boolean,
      nombrePersonneMax: number
    ) {
      this.Id = Id;
      this.date = date;
      this.estDispo = estDispo;
      this.nombrePersonneMax = nombrePersonneMax;
    }
    toJson(): object {
        return {
          id: this.Id,
          date: this.date,
          estDispo: this.estDispo,
          nombrePersonneMax: this.nombrePersonneMax,
         
          
        };
  }
}