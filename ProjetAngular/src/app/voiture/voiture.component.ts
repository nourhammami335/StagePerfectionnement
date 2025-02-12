import { Component, inject, OnInit } from '@angular/core';
import { Voiture } from '../voiture';
import { VoitureService } from '../voiture.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-voiture',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './voiture.component.html',
  styleUrl: './voiture.component.css'
})
export class VoitureComponent implements OnInit{
  voitures: Voiture[] = [];
private readonly router: Router = inject(Router);
  constructor(private voitureService: VoitureService) {}
  immatriculation: string = '';
  searchTerm: string = '';
  // searchVehicle() {
  //   this.router.navigate(['/RechercheVehicule', { immatriculation: this.immatriculation }]);
  // } 
  searchVehicle() {
    if (this.searchTerm) {
      this.router.navigate(['/RechercheVehicule'], { queryParams: { term: this.searchTerm } });
    }
  }
  // newVoiture: Voiture = { immatriculation: '', marque: '', modele: '', carburant: '', conducteurId: 0 };
  naviguerVersHome() {
  
    this.router.navigate(['/menu']);
 
}
OnNaviguerVersModifierVoiture(voiture: Voiture){
  this.router.navigate(['/ModifierVoiture',voiture.immatriculation]);
}
  ngOnInit(): void {
    this.loadVoitures();
  }

  loadVoitures(): void {
    this.voitureService.getVoitures().subscribe(data => {
      this.voitures = data;
    });
  }
  deleteVoiture(immatriculation: string): void {
    this.voitureService.deleteVoiture(immatriculation).subscribe(() => {
      this.loadVoitures();
      this.voitures=this.voitures.filter(v => v.immatriculation !== immatriculation);
    });
  }

  // deleteConducteur(numero: string): void {
  //   this.conducteurService.deleteConducteur(numero).subscribe(() => {
  //     this.loadConducteurs();
  //     this.conducteurs = this.conducteurs.filter(c => c.numero !== numero); // Recharger la liste après suppression
  //   });
  // }



  // addVoiture(): void {
  //   this.voitureService.createVoiture(this.newVoiture).subscribe(() => {
  //     this.loadVoitures();
  //     this.newVoiture = { immatriculation: '', marque: '', modele: '', carburant: '', conducteurId: 0 };
  //   });
  // }
  
  naviguerVersAjouterVehicule() {
      this.router.navigate(['/AjouterVehicule']);
  }
}
