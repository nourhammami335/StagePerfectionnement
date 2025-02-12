import { Component, inject, OnInit } from '@angular/core';
import { Conducteur } from '../conducteur';
import { ActivatedRoute, Router } from '@angular/router';
import { ConducteurService } from '../conducteur.service';
@Component({
  selector: 'app-recherche-conducteur',
  standalone: true,
  imports: [],
  templateUrl: './recherche-conducteur.component.html',
  styleUrl: './recherche-conducteur.component.css'
})
export class RechercheConducteurComponent implements OnInit{
conducteur!:Conducteur;
numero:string ='';
filteredConducteurs: Conducteur[] = [];
private readonly router: Router = inject(Router);
errorMessage: string = '';
constructor(private route: ActivatedRoute, private ConducteurService: ConducteurService) {}
ngOnInit(){
  // this.route.params.subscribe(params => {
  //         this.numero = params['numero'];
  //         this.fetchVehicleDetails(); 
  //       });

  this.route.queryParams.subscribe(params => {
    const searchTerm = params['term'];
    if (searchTerm) {
      this.fetchFilteredConducteurs(searchTerm);
    }
  });
      }

      fetchFilteredConducteurs(searchTerm: string): void {
        this.ConducteurService.searchConducteurs(searchTerm).subscribe(
          data => {
            this.filteredConducteurs = data;
          // },
          // error => {
          //   console.error('Error fetching filtered conducteurs:', error);
          //   this.errorMessage = 'Erreur lors de la récupération des conducteurs.';
          }
        );
      }

      
  naviguerVersHome() {
  
    this.router.navigate(['/menu']);
 
}
    
    //   fetchVehicleDetails(): void {
    //     this.ConducteurService.getConducteur(this.numero).subscribe(
    //       data => {
    //         this.conducteur = data;
    //         console.log(this.conducteur); 
         
    //       }
    //     );
    //  }

  //  vehicle!: Voiture;
  //   immatriculation: string = '';
  //   errorMessage: string = '';
  
  //   constructor(private route: ActivatedRoute, private vehicleService: VoitureService) {}
  
  //   ngOnInit() {
      
  //     this.route.params.subscribe(params => {
  //       this.immatriculation = params['immatriculation'];
  //       this.fetchVehicleDetails(); 
  //     });
  //   }
  
  //   fetchVehicleDetails(): void {
  //     this.vehicleService.getVoiture(this.immatriculation).subscribe(
  //       data => {
  //         this.vehicle = data;
  //         console.log(this.vehicle); 
       
  //       }
  //     );
  //   }
}
