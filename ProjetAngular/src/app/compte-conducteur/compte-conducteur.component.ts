import { Component, inject, OnInit } from '@angular/core';
import { Conducteur } from '../conducteur';
import { ConducteurService } from '../conducteur.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte-conducteur',
  standalone: true,
  imports: [],
  templateUrl: './compte-conducteur.component.html',
  styleUrl: './compte-conducteur.component.css'
})
export class CompteConducteurComponent implements OnInit{
  conducteur: Conducteur | null = null;

  private readonly router: Router = inject(Router);
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getMonCompte().subscribe(
      (data) => {
        this.conducteur = data; // Stocker les informations du conducteur
      // },
      // (error) => {
      //   console.error('Erreur lors de la récupération des informations du conducteur', error);
      }
    );
  }

  naviguerVersHome() {
  
    this.router.navigate(['/MenuConducteur']);
 
}
}
