export class Commentaire {
    constructor(private id: number,private nom: string, private commentaire: string,private etoile: number) {
        this.id=id;
        this.nom = nom;
        this.commentaire = commentaire;
        this.etoile = etoile;
        
    }
    setId(id:number): void {
        this.id=id;
    }
    getId(): number {
        return this.id;
    }
    getEtoile(): string {
        return `${this.etoile} $`;
    }
    getCommentaire(): string {
        return `${this.commentaire}`;
    }
    getNom(): string {
        return `${this.nom}`;
    }
    setEtoile(etoile:number): void {
        this.etoile=etoile;
    }
    setCommentaire(commentaire:string): void {
        this.commentaire=commentaire;
    }
    setNom(nom:string): void {
        this.nom=nom;
    }
  
}