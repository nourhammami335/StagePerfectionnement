import { Component, inject } from '@angular/core';
import { ConducteurService } from '../conducteur.service';
import { Conducteur } from '../conducteur';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-conducteur',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './conducteur.component.html',
  styleUrl: './conducteur.component.css'
})
export class ConducteurComponent {
  private readonly router: Router = inject(Router);
  conducteurs: Conducteur[] = [];
  numero: string = '';
  searchTerm: string = '';
  searchConducteur() {
    if (this.searchTerm) {
      this.router.navigate(['/RechercheConducteur'], { queryParams: { term: this.searchTerm } });
    }
  }
naviguerVersHome() {
  
    this.router.navigate(['/menu']);
 
}
naviguerVersAjouterConducteur() {
  this.router.navigate(['/AjouterConducteur']);
}
naviguerVersModifierConducteur(conducteur: Conducteur) {
  this.router.navigate(['/ModifierConducteur',conducteur.numero]);
}
 // conducteurs: Conducteur[] = [];
  // newConducteur: Conducteur = { numero: 0, nom: '', prenom: '', age: 0, sexe: '', email: '', adresse: '', departement: '', login: '', motdepasse: '' };
  newConducteur: Conducteur = new Conducteur('', '', '', 0, '', '', '', '', '', '');
  constructor(private conducteurService: ConducteurService) {}

  ngOnInit(): void {
    this.loadConducteurs();
  }

  loadConducteurs(): void {
    this.conducteurService.getConducteurs().subscribe(data => {
      this.conducteurs = data;
      this.initializeVisibility();
    });
  }

  addConducteur(): void {
    this.conducteurService.createConducteur(this.newConducteur).subscribe(() => {
      this.loadConducteurs(); // Recharger la liste après ajout
      this.newConducteur = new Conducteur('', '', '', 0, '', '', '', '', '', ''); // Réinitialiser le formulaire
    });
  }
  deleteConducteur(numero: string): void {
    this.conducteurService.deleteConducteur(numero).subscribe(() => {
      this.loadConducteurs();
      this.conducteurs = this.conducteurs.filter(c => c.numero !== numero); // Recharger la liste après suppression
    });
  }

  private initializeVisibility(): void {
    this.conducteurs.forEach(conducteur => {
      conducteur.showLogin = false; // Initialiser à false
      conducteur.showMotdepasse = false; // Initialiser à false
    });
  }

  // Méthode pour basculer la visibilité du login
  toggleLoginVisibility(conducteur: Conducteur): void {
    conducteur.showLogin = !conducteur.showLogin; // Inverser la visibilité
  }

  // Méthode pour basculer la visibilité du mot de passe
  toggleMotdepasseVisibility(conducteur: Conducteur): void {
    conducteur.showMotdepasse = !conducteur.showMotdepasse; // Inverser la visibilité
  }












  // addConducteur(): void {
  //   this.conducteurService.createConducteur(this.newConducteur).subscribe(() => {
  //     this.loadConducteurs();
  //     this.newConducteur = { numero: 0, nom: '', prenom: '', age: 0, sexe: '', email: '', adresse: '', departement: '', login: '', motdepasse: '' };
  //   });
  // }


  //deleteConducteur(numero: string): void {
    //this.conducteurService.deleteConducteur(numero).subscribe(
      // () => {
      //    alert("**");
      //   this.loadConducteurs(); 
      // },
     
    //);
 // }



//  loadUtilisateurs() {
//   this.utilisateurService.getUtilisateurs().subscribe(data => {
//     // Ajoutez une propriété showPassword à chaque utilisateur
//     this.utilisateurs = data.map(utilisateur => ({
//       ...utilisateur,
//       showPassword: false // Initialiser à false pour masquer le mot de passe
//     }));
//   });
// }

// togglePasswordVisibility(utilisateur: Utilisateur) {
//   utilisateur.showPassword = !utilisateur.showPassword; // Basculez l'état de visibilité
// }
}
