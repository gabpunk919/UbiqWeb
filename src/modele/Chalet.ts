import { Evenement } from "./Evenement";

export class Chalet extends Evenement{
    constructor( id: number, nom: string,  description: string, prix: number, photoLink: string ) {
        super(id,nom,description,prix,photoLink)
    }
   
}