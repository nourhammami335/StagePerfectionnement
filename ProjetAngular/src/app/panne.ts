import { Conducteur } from "./conducteur";

export class Panne {
    constructor(public id: number,public nom:string, public prenom:string,public email:string,public immatriculation:string,public description:string,public datePanne:Date,public conducteur:Conducteur,public statut:string){}
}
