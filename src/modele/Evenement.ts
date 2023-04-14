class Evenement {
    constructor(private id: number,private nom: string, private description: string,private prix: number,private photoLink: string ) {
        this.id=id;
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.photoLink=photoLink;
    }
    setId(id:number): void {
        this.id=id;
    }
    getId(): number {
        return this.id;
    }
    getPrix(): string {
        return `${this.prix} $`;
    }
    getDescription(): string {
        return `${this.description}`;
    }
    getNom(): string {
        return `${this.nom}`;
    }
    setPrix(prix:number): void {
        this.prix=prix;
    }
    setDescription(description:string): void {
        this.description=description;
    }
    setNom(nom:string): void {
        this.nom=nom;
    }
    getPhotoLink(): string {
        return `${this.photoLink}`;
    }
    setPhotoLink(photoLink:string): void {
        this.photoLink=photoLink;
    }
}