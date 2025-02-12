import { Component, inject, OnInit } from '@angular/core';
import { Panne } from '../panne';
import { PanneService } from '../panne.service';
import {  DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.css'
})
export class AlertsComponent implements OnInit{
  pannes: Panne[] = [];

  private readonly panneService: PanneService= inject(PanneService);
  private readonly router: Router = inject(Router);
  alertCounterComponent: any;

  ngOnInit() {
    this.loadPannes();
    //this.loadPanneCount();
  }

  naviguerVersHome() {
  
    this.router.navigate(['/menu']);}

  loadPannes() {
    this.panneService.getPannes().subscribe(data => {
      this.pannes = data;
    });
  }
  //panneCount: number = 0;

  updateStatut(id: number, statut: string) {
    this.panneService.updateStatut(id, statut).subscribe(response => {
      console.log('Statut mis à jour:', response);
      alert('etat determine');
      this.loadPannes();
       // Rechargez les pannes pour voir les mises à jour
    });
  }
  

  

  /*loadPanneCount() {
    this.panneService.getPanneCount().subscribe(count => {
      this.panneCount = count;
    });
  }

  // Méthode pour mettre à jour le compteur après suppression
  updatePanneCount() {
    this.loadPanneCount();
  }*/

  deletePanne(id: number) {
    this.panneService.deletePanne(id).subscribe(() => {
      this.loadPannes();
      // Mettre à jour le compteur
      //this.alertCounterComponent.updatePanneCount();
    });
  }
}
