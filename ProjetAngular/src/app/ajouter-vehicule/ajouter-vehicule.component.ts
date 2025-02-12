import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoitureService } from '../voiture.service';
import { Voiture } from '../voiture';
import { FormsModule, ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Conducteur } from '../conducteur';
import { ConducteurService } from '../conducteur.service';

@Component({
  selector: 'app-ajouter-vehicule',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './ajouter-vehicule.component.html',
  styleUrls: ['./ajouter-vehicule.component.css'] // Correction de 'styleUrl' à 'styleUrls'
})
export class AjouterVehiculeComponent implements OnInit { // Ajout de l'interface OnInit
  private readonly router: Router = inject(Router);
  private readonly voitureService: VoitureService = inject(VoitureService);
  private readonly conducteurService: ConducteurService = inject(ConducteurService);
  AjoutForm!: FormGroup;
  readonly fb: FormBuilder = inject(FormBuilder);
  voitures: Voiture[] = [];
  newvoiture!: Voiture;
  conducteurs: Conducteur[] = [];
  ngOnInit(): void {
    this.AjoutForm = this.fb.nonNullable.group({
      immatriculation: ['', [Validators.required]],
      modele: ['', [Validators.required]],
      marque: ['', [Validators.required]],
      carburant: ['', [Validators.required]],
      conducteur: ['', [Validators.required]] // Assurez-vous que 'conducteur' est bien un champ de type string
    });
    this.loadVoitures(); 
    this.loadConducteurs();
    // Chargement des voitures lors de l'initialisation
  }

  naviguerVersVoiture() {
    this.router.navigate(['/voiture']);
  }

  get conducteur() {
    return this.AjoutForm.get('conducteur');
  }
  get immatriculation() {
    return this.AjoutForm.get('immatriculation');
  }
  get modele() {
    return this.AjoutForm.get('modele');
  }
  get marque() {
    return this.AjoutForm.get('marque');
  }
  get carburant() {
    return this.AjoutForm.get('carburant');
  }

  loadVoitures(): void {
    this.voitureService.getVoitures().subscribe(data => {
      this.voitures = data;
    });
  }

  loadConducteurs(): void {
    this.conducteurService.getConducteurs().subscribe(data => {
      this.conducteurs = data; // Stocker les conducteurs récupérés
    });
  }

  onSubmit(): void {
    if (this.AjoutForm.valid) {
      const conducteur: Conducteur = {
        numero: this.AjoutForm.value.conducteur, // Get the conducteur number from the form
        nom: '', // You can leave these empty or set default values
        prenom: '',
        age: 0,
        sexe: '',
        email: '',
        adresse: '',
        departement: '',
        login: '',
        motdepasse: ''
    };

    // Create the new Voiture instance
    this.newvoiture = new Voiture(
        this.AjoutForm.value.immatriculation,
        this.AjoutForm.value.modele,
        this.AjoutForm.value.marque,
        this.AjoutForm.value.carburant,
        conducteur // Pass the Conducteur object here
    );
      console.log(this.newvoiture);
      this.voitureService.createVoiture(this.newvoiture).subscribe(() => {
        this.loadVoitures();
        this.AjoutForm.reset(); // Reset the form after submission
        this.router.navigate(['/voiture']); // Navigate to the desired route
      // }, error => {
      //   console.error('Error creating voiture:', error); // Ajout d'un message d'erreur
      });
    } else {
      console.log('Form is invalid');
    }
  }

  // onResetForm() {
  //   this.AjoutForm.reset();
  // }
}