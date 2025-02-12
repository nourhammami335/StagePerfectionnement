import { Voiture } from "./voiture";

export class Operation {
    constructor(public id:number,public voiture:Voiture,public dateVidange:Date,public dateAssurance:Date,public dateVisite:Date){}
}
