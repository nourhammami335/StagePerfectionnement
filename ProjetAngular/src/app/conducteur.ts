export class Conducteur {
    constructor(public numero:string,public nom: string,public  prenom: string,public age: number,public sexe: string,public email: string,public adresse: string,public departement:string,public login:string,public motdepasse:string,public showLogin?: boolean, // Utilisez ? pour indiquer que ce champ est optionnel
        public showMotdepasse?: boolean){}
}
