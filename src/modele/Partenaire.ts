export class Partenaire {
    constructor(private id :number,private nom: string, private prenom: string,private telephone: string,private email: string) {
        this.id=id;
        this.nom = nom;
        this.prenom = prenom;
        this.telephone = telephone;
        this.email = email;
    }
    getEmail(): string {
        return this.email;
    }
    setEmail(email:string): void {
        this.email=email;
    }
    getId(): number {
        return this.id;
    }
    setId(id:number): void {
        this.id=id;
    }
    getPrix(): string {
        return `${this.telephone}`;
    }
    getDescription(): string {
        return `${this.prenom}`;
    }
    getNom(): string {
        return `${this.nom}`;
    }
    setPrix(telephone:string): void {
        this.telephone=telephone;
    }
    setDescription(description:string): void {
        this.prenom=description;
    }
    setNom(nom:string): void {
        this.nom=nom;
    }
    toJson(): object {
        return {
          id: this.id,
          nom: this.nom,
          prenom: this.prenom,
          telephone: this.telephone,
          email: this.email,
        };
    }
}