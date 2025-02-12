import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { PanneService } from '../panne.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  private readonly router: Router = inject(Router);
OnNaviguerVersvoiture(){
  this.router.navigate(['/voiture']);
}
OnNaviguerVersconducteur(){
  this.router.navigate(['/conducteur']);
}
OnNaviguerVersOperation(){
  this.router.navigate(['/operation']);
}
OnNaviguerVersAlerts(){
this.router.navigate(['alerts']);
}

panneCount: number = 0;

constructor(private panneService: PanneService,private authService: AuthService) {}

ngOnInit(): void {
  this.loadPanneCount();
}

loadPanneCount() {
  this.panneService.getPanneCount().subscribe(count => {
    this.panneCount = count;
  
  });
}

// Méthode pour mettre à jour le compteur après suppression
updatePanneCount() {
  this.loadPanneCount();
}
deconnexion() {
  this.authService.logout(); // Appeler la méthode de déconnexion
}
}
