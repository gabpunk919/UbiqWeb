class Chauffeur {
    constructor(private id :number,private nom: string, private prenom: string,private telephone: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.telephone = telephone;
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

}