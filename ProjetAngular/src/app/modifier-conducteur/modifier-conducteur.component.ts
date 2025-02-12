import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConducteurService } from '../conducteur.service';
import { CommonModule } from '@angular/common';
import { Conducteur } from '../conducteur';

@Component({
  selector: 'app-modifier-conducteur',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './modifier-conducteur.component.html',
  styleUrl: './modifier-conducteur.component.css'
})
export class ModifierConducteurComponent implements OnInit{
private readonly ConducteurService: ConducteurService =inject(ConducteurService);
private readonly router: Router = inject(Router);
readonly fb: FormBuilder = inject(FormBuilder);
private readonly route: ActivatedRoute = inject(ActivatedRoute);
modifyForm!: FormGroup;
conducteurs: Conducteur[] = [];
ngOnInit(): void {
  this.modifyForm = this.fb.group({
    numero: ['', [Validators.required]], // Assuming you still want to capture the numero
    login: ['', [Validators.required]], // Optional, can be empty initially
    motdepasse: ['', [Validators.required]] // Optional, can be empty initially
  });
  const numero = this.route.snapshot.paramMap.get('numero');
  if (numero) {
    this.setConducteurNumero(numero); // Appeler la méthode pour pré-remplir le numéro
  }
}
setConducteurNumero(numero: string): void {
  this.modifyForm.patchValue({
    numero: numero // Remplir le champ numéro avec le numéro du conducteur sélectionné
  });
}
get numero(){
  return this.modifyForm.get('numero');
}
get login(){
  return this.modifyForm.get('login');
}
get motdepasse(){
  return this.modifyForm.get('motdepasse');
}

naviguerVersConducteur() {
  this.router.navigate(['/conducteur']);
}

loadConducteurs(): void {
  this.ConducteurService.getConducteurs().subscribe(data => {
    this.conducteurs = data;
  });
}
onSubmit(): void {
  // Récupérer les valeurs du formulaire
  const { numero, login, motdepasse } = this.modifyForm.value;

  const updatedFields: Partial<{ login: string; motdepasse: string }> = {};

  if (login) {
    updatedFields.login = login;
  }
  if (motdepasse) {
    updatedFields.motdepasse = motdepasse;
  }

  // Call the service to update the conducteur
  this.ConducteurService.updateLoginAndPassword(numero, updatedFields).subscribe(
    (conducteur) => {
      console.log('Conducteur updated successfully:', conducteur);
      //alert("Conducteur modifié avec succès");
      this.loadConducteurs();
      this.modifyForm.reset();
      this.router.navigate(['/conducteur']); // Navigate to the conducteur list or another page
    // },
    // (error) => {
    //   console.error('Error updating conducteur:', error);
    //   alert("Erreur lors de la modification du conducteur");
    }
  );
}
}
