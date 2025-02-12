import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConducteurService } from '../conducteur.service';
import { CommonModule } from '@angular/common';
import { Conducteur } from '../conducteur';

@Component({
  selector: 'app-ajouter-conducteur',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './ajouter-conducteur.component.html',
  styleUrl: './ajouter-conducteur.component.css'
})
export class AjouterConducteurComponent implements OnInit{
  private readonly router: Router = inject(Router);
  private readonly ConducteurService: ConducteurService =inject(ConducteurService);
  AjoutForm!: FormGroup;
  readonly fb: FormBuilder = inject(FormBuilder);
  conducteurs: Conducteur[] = [];
  newConducteur!: Conducteur;
ngOnInit():void{
  this.AjoutForm=this.fb.nonNullable.group({
    numero:['',[Validators.required]],
    nom:['',[Validators.required]],
    prenom:['',[Validators.required]],
    age:[0,[Validators.required]],
    sexe:['',[Validators.required]],
    email:['',[Validators.required]],
    adresse:['',[Validators.required]],
    departement:['',[Validators.required]],
    login:['',[Validators.required]],
    motdepasse:['',[Validators.required]]
  });
}

  naviguerVersConducteur() {
    this.router.navigate(['/conducteur']);
}

get numero(){
  return this.AjoutForm.get('numero');
}
get nom(){
  return this.AjoutForm.get('nom');
}
get prenom(){
  return this.AjoutForm.get('prenom');
}
get age(){
  return this.AjoutForm.get('age');
}
get sexe(){
  return this.AjoutForm.get('sexe');
}
get email(){
  return this.AjoutForm.get('email');
}
get adresse(){
  return this.AjoutForm.get('adresse');
}
get departement(){
  return this.AjoutForm.get('departement');
}
get login(){
  return this.AjoutForm.get('login');
}
get motdepasse(){
  return this.AjoutForm.get('motdepasse');
}
loadConducteurs(): void {
  this.ConducteurService.getConducteurs().subscribe(data => {
    this.conducteurs = data;
  });
}
onSubmit(): void {
  if (this.AjoutForm.valid) {
    this.newConducteur = new Conducteur(
      this.AjoutForm.value.numero,
      this.AjoutForm.value.nom,
      this.AjoutForm.value.prenom,
      this.AjoutForm.value.age,
      this.AjoutForm.value.sexe,
      this.AjoutForm.value.email,
      this.AjoutForm.value.adresse,
      this.AjoutForm.value.departement,
      this.AjoutForm.value.login,
      this.AjoutForm.value.motdepasse
    );

    this.ConducteurService.createConducteur(this.newConducteur).subscribe(() => {
      this.loadConducteurs();
      this.AjoutForm.reset(); // Reset the form after submission
      this.router.navigate(['/conducteur']); // Navigate to the desired route
    // }, error => {
    //   console.error('Error creating conducteur:', error);
    });
  } else {
    console.log('Form is invalid');
  }
}
onResetForm(){
  this.AjoutForm.reset();
  // this.AjoutForm.get('numero')?.setValue(this.conducteurs.length+1);
}
// event: Event parametre dy onSubmit!!
}
