import { Conducteur } from "./conducteur";

export class Voiture {
    // static immatriculation: any;
    constructor(public immatriculation: string,public modele: string,public marque: string,public carburant: string,public conducteur:Conducteur){}
}
