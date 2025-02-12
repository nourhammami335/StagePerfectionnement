import { Component, inject, OnInit } from '@angular/core';
import { Operation } from '../operation';
import { OperationService } from '../operation.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-operation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  immatriculation: string = '';
  operations: Operation[] = [];
  private readonly router: Router = inject(Router);
  // newOperation: Operation = { id: 0, idVoiture: '', dateVidange: new Date(), dateAssurance: new Date(), dateVisite: new Date() };

  
  naviguerVersAjouterOperation() {
    this.router.navigate(['/AjouterOperation']);
  }

  naviguerVersHome() {
  
    this.router.navigate(['/menu']);}



  constructor(private operationService: OperationService) { }
  searchOperations(): void {
    this.router.navigate(['/RechercheOperation', { immatriculation: this.immatriculation }]);
  }
  ngOnInit(): void {
    this.loadOperations();
  }
  

  loadOperations(): void {
    this.operationService.getOperations().subscribe(data => {
      this.operations = data;
    });
  }
OnNaviguerVersModifierOperation( ){
  this.router.navigate(['/ModifierOperation']);
}
  // addOperation(): void {
  //   this.operationService.createOperation(this.newOperation).subscribe(() => {
  //     this.loadOperations();
  //     this.newOperation = { id: 0, idVoiture: '', dateVidange: new Date(), dateAssurance: new Date(), dateVisite: new Date() };
  //   });
  // }

  deleteOperation(id: number): void {
    this.operationService.deleteOperation(id).subscribe(() => {
      this.loadOperations();
      this.operations=this.operations.filter(o=> o.id !==id);
    });
  }

  // deleteVoiture(immatriculation: string): void {
  //   this.voitureService.deleteVoiture(immatriculation).subscribe(() => {
  //     this.loadVoitures();
  //     this.voitures=this.voitures.filter(v => v.immatriculation !== immatriculation);
  //   });
  // }
}