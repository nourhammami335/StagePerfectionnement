import { Component ,inject, OnInit} from '@angular/core';
import { Panne } from '../panne';
import { PanneService } from '../panne.service';
import { AuthService } from '../auth.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamation',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './reclamation.component.html',
  styleUrl: './reclamation.component.css'
})
export class ReclamationComponent implements OnInit{
  pannes: Panne[] = [];
 
   private readonly panneService: PanneService= inject(PanneService);
   private readonly router: Router = inject(Router);
   constructor(private authService: AuthService) { }
 
   ngOnInit() {
    // this.authService.getMaPanne().subscribe(
    //   (data) => {
    //     this.pannes = data; });
    this.authService.getMonCompte().subscribe((conducteur) => {
      if (conducteur) {
        this.loadPannes(conducteur.numero);
      }
    });
   }
   naviguerVersHome() {
  
    this.router.navigate(['/MenuConducteur']);}
   loadPannes(conducteurNumero: string) {
    this.panneService.getPannesByConducteur(conducteurNumero).subscribe(data => {
      this.pannes = data;
    });
  }
 
  //  loadPannes() {
  //    this.panneService.getPannes().subscribe(data => {
  //      this.pannes = data;
  //    });
  //  }
}
