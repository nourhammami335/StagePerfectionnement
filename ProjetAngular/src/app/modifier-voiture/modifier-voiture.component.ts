import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../voiture.service';
import { Voiture } from '../voiture';
import { FormsModule, ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modifier-voiture',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './modifier-voiture.component.html',
  styleUrls: ['./modifier-voiture.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ModifierVoitureComponent implements OnInit { // Implement OnInit
  private readonly voitureService: VoitureService = inject(VoitureService);
  private readonly router: Router = inject(Router);
  readonly fb: FormBuilder = inject(FormBuilder);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  modifyForm!: FormGroup;
  voitures: Voiture[] = [];

  ngOnInit(): void {
    this.modifyForm = this.fb.group({
      immatriculation: ['', [Validators.required]], // Required field
      conducteurNumero: ['', [Validators.required]] // Required field
    });
    this.loadVoitures();
    const immatriculation = this.route.snapshot.paramMap.get('immatriculation');
  if (immatriculation) {
    this.setVoitureImmatriculation(immatriculation); // Appeler la méthode pour pré-remplir le numéro
  } // Load voitures if needed
  }

  setVoitureImmatriculation(immatriculation: string): void {
    this.modifyForm.patchValue({
      immatriculation: immatriculation // Remplir le champ numéro avec le numéro du conducteur sélectionné
    });
  }
  
  loadVoitures(): void {
    this.voitureService.getVoitures().subscribe(data => {
      this.voitures = data;
    });
  }

  naviguerVersVoiture() {
    this.router.navigate(['/voiture']);
  }

  get immatriculation() {
    return this.modifyForm.get('immatriculation'); // Access the value directly
  }

  get conducteurNumero() {
    return this.modifyForm.get('conducteurNumero'); // Access the value directly
  }

  onSubmit(): void {
    // Ensure the form is valid before proceeding
    if (this.modifyForm.valid) {
      this.voitureService.updateConducteur(this.immatriculation?.value, this.conducteurNumero?.value).subscribe({
        next: (updatedVoiture: Voiture) => {
          console.log('Conducteur updated successfully', updatedVoiture);
          alert('Conducteur modifié avec succès');
          this.router.navigate(['/voiture']); // Redirect to the list of voitures
        },
        error: (error) => {
          console.error('Error updating conducteur', error);
          alert('Erreur lors de la modification du conducteur');
        }
      });
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  }
}