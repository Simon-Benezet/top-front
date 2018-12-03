import { AvisComponent } from './avis/avis.component';

export class Collegue {
    photo: string;
    nom: string;
    avis: AvisComponent;
    score: number;

    constructor(photo, nom, avis, score) {
        this.photo = photo;
        this.nom = nom;
        this.avis = avis;
        this.score = score;
    }

}

export enum Avis {
    AIMER, DETESTER
}

export class Vote {
    colleg: Collegue;
    avis: Avis;

    constructor(colleg: Collegue, avis: Avis) {
        this.colleg = colleg;
        this.avis = avis;
    }

}