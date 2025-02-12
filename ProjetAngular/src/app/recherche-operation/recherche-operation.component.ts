import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationService } from '../operation.service';
import { Operation } from '../operation';
@Component({
  selector: 'app-recherche-operation',
  standalone: true,
  imports: [],
  templateUrl: './recherche-operation.component.html',
  styleUrl: './recherche-operation.component.css'
})
export class RechercheOperationComponent {
  immatriculation: string = '';
  operations: any[] = [];
  errorMessage: string = '';
private readonly router: Router = inject(Router);
  constructor(private route: ActivatedRoute, private operationService: OperationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.immatriculation = params['immatriculation'];
      this.fetchOperations();
    });
  }

  fetchOperations(): void {
    this.operationService.getOperationsByImmatriculation(this.immatriculation).subscribe(
      data => {
        this.operations = data;
        this.errorMessage = '';
      // },
      // error => {
      //   this.operations = [];
      //   this.errorMessage = 'Aucune opération trouvée pour l\'immatriculation : ' + this.immatriculation;
      }
    );
  }

  naviguerVersOperation(){
    this.router.navigate(['/operation']);
  }
}
