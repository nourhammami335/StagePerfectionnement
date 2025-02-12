import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanneService } from '../panne.service';
import { Panne } from '../panne';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Conducteur } from '../conducteur';
import { ConducteurService } from '../conducteur.service';
import { VoitureService } from '../voiture.service';
import { Voiture } from '../voiture';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent implements OnInit{
  private readonly router: Router = inject(Router);
  
naviguerVersHome() {
    this.router.navigate(['/MenuConducteur']);
}
panneForm!: FormGroup;
conducteurNumero: string | null = null;
conducteurs: Conducteur[] = [];
voitures: Voiture[] = [];

readonly fb: FormBuilder = inject(FormBuilder);
private readonly panneService: PanneService= inject(PanneService);
private readonly conducteurService:ConducteurService=inject(ConducteurService);
private readonly voitureService:VoitureService=inject(VoitureService);
private readonly authService: AuthService=inject(AuthService)
  ngOnInit(): void {

 // Récupérer le numéro du conducteur depuis le service d'authentification
 this.authService.getMonCompte().subscribe(conducteur => {
  this.conducteurNumero = conducteur?.numero; // Assurez-vous que le conducteur n'est pas null
});

  this.panneForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    //numero:['', Validators.required],
    immatriculation: ['', Validators.required],
    description: ['', Validators.required],
    datePanne: ['', Validators.required]
  });
  this.loadVoitures(); 
  this.loadConducteurs();
}
get nom() {
  return this.panneForm.get('nom');
}

get prenom() {
  return this.panneForm.get('prenom');
}
get email() {
  return this.panneForm.get('email');
}
get immatriculation() {
  return this.panneForm.get('immatriculation');
}
get description() {
  return this.panneForm.get('description');
}
get datePanne() {
  return this.panneForm.get('datePanne');
}
/*get numero() {
  return this.panneForm.get('numero');
}*/

onSubmit() {
 /* if (this.panneForm.valid) {
    const panne: Panne = this.panneForm.value;
    this.panneService.createPanne(panne).subscribe(response => {
      console.log('Panne créée:', response);
      this.resetForm();
    });
  }*/

    if (this.panneForm.valid && this.conducteurNumero) {
      const panne: Panne = {
        ...this.panneForm.value,
        conducteur: { numero: this.conducteurNumero } // Ajoutez le conducteur ici
      };
      this.panneService.createPanne(panne).subscribe(response => {
        console.log('Panne créée:', response);
        this.resetForm();
      });
    }
}

resetForm() {
  this.panneForm.reset();
}

loadConducteurs(): void {
  this.conducteurService.getConducteurs().subscribe(data=> {
    this.conducteurs = data; // Stocker les conducteurs récupérés
  });
}
loadVoitures(): void {
  this.voitureService.getVoitures().subscribe(data => {
    this.voitures = data;
  });
}
}
