import { Evenement } from "../modele/Evenement";
import { ChauffeurVIP } from "../modele/ChauffeurVIP";
import { Chalet } from "../modele/Chalet";

import { PleinAir } from "src/modele/PleinAir";
import { Restauration } from "src/modele/Restauration";
import { RouteVin } from "src/modele/RouteVin";
export class listData {
    constructor( ) {
       
    }
public chauffeurs: ChauffeurVIP[] = [
   
  ];
  public chalets: Chalet[] = [
   
  ];
  public pleinAirs: PleinAir[] = [
   
  ];
  public restaurations: Restauration[] = [
    
  ];
  public  routesVins: RouteVin[] = [
  
  ];
}