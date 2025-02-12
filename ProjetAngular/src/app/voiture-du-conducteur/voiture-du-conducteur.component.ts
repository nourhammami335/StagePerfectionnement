import { Component, inject, OnInit } from '@angular/core';
import { Voiture } from '../voiture';
import { VoitureService } from '../voiture.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voiture-du-conducteur',
  standalone: true,
  imports: [],
  templateUrl: './voiture-du-conducteur.component.html',
  styleUrl: './voiture-du-conducteur.component.css'
})
export class VoitureDuConducteurComponent implements OnInit{
  voitures: Voiture[] = [];
  conducteur:string='';
  constructor(private authService: AuthService, private voitureService: VoitureService) {}
private readonly router: Router = inject(Router);
  ngOnInit(): void {
    this.authService.getMaVoiture().subscribe(
      (data) => {
        this.voitures = data; // Stocker les voitures récupérées
      // },
      // (error) => {
      //   console.error('Erreur lors de la récupération des voitures', error);
      }
    );
  }

  naviguerVersHome() {
  
    this.router.navigate(['/MenuConducteur']);
 
}
}
