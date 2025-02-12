import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-menu-conducteur',
  standalone: true,
  imports: [],
  templateUrl: './menu-conducteur.component.html',
  styleUrl: './menu-conducteur.component.css'
})
export class MenuConducteurComponent {
  private readonly router: Router = inject(Router);
  constructor(private authService: AuthService) {}
OnNaviguerVersPanne(){
  this.router.navigate(['/formulaire']);
}
OnNaviguerVersCompteConducteur(){
  this.router.navigate(['/CompteConducteur']);
}
OnNaviguerVersVoitureDuConducteur(){
  this.router.navigate(['/VoitureDuConducteur']);
}

deconnexion() {
  this.authService.logout(); // Appeler la méthode de déconnexion
}
OnNaviguerVersReclamation(){
  this.router.navigate(['/reclamation']);
}
}
