import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from '../voiture.service';
import { Voiture } from '../voiture';

@Component({
  selector: 'app-recherche-vehicule',
  standalone: true,
  imports: [],
  templateUrl: './recherche-vehicule.component.html',
  styleUrls: ['./recherche-vehicule.component.css']
})
export class RechercheVehiculeComponent implements OnInit {
  vehicle!: Voiture;
  immatriculation: string = '';
  
  filteredVehicles: Voiture[] = [];
  errorMessage: string = '';
  private readonly router: Router = inject(Router);
  constructor(private route: ActivatedRoute, private vehicleService: VoitureService) {}

  ngOnInit() {
    
    // this.route.params.subscribe(params => {
    //   this.immatriculation = params['immatriculation'];
    //   this.fetchVehicleDetails(); 
    // });
    this.route.queryParams.subscribe(params => {
      const searchTerm = params['term'];
      if (searchTerm) {
        this.fetchFilteredVehicles(searchTerm);
      }
    });

  }


  fetchFilteredVehicles(searchTerm: string): void {
    this.vehicleService.searchVoitures(searchTerm).subscribe(
      data => {
        this.filteredVehicles = data;
      // },
      // error => {
      //   console.error('Error fetching filtered vehicles:', error);
      //   this.errorMessage = 'Erreur lors de la récupération des véhicules.';
      }
    );
  }

  naviguerVersHome() {
  
    this.router.navigate(['/menu']);
 
}
// dans mon ancien code!

  // fetchVehicleDetails(): void {
  //   this.vehicleService.getVoiture(this.immatriculation).subscribe(
  //     data => {
  //       this.vehicle = data;
  //       console.log(this.vehicle); // Afficher les détails de la voiture dans la console
      // },
      // error => {
      //   console.error('Error fetching vehicle details:', error);
      //   this.errorMessage = 'Erreur lors de la récupération des détails du véhicule.';
  //     }
  //   );
  // }
}