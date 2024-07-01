export class Car {
    id: number;
    marque: string;
    modele: string;
    annee_modele: number;
    boite_vitesse: string;
    carburant: string;
    image: string | null ;
    createdAt: Date;

    constructor(
        marque: string = '',
        modele: string = '',
        annee_modele: number = 0,
        boite_vitesse: string= '',
        carburant: string = '',
        image: string ='',
        createdAt: Date = new Date()
    ) {
        this.marque = marque,
        this.modele = modele,
        this.annee_modele = annee_modele,
        this.boite_vitesse = boite_vitesse,
        this.carburant = carburant,
        this.image = image,
        this.createdAt = createdAt
    }

}