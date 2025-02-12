import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperationService } from '../operation.service'; // Adjust the import based on your project structure
import { Operation } from '../operation'; // Adjust the import based on your project structure
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modifier-operation',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './modifier-operation.component.html',
  styleUrl: './modifier-operation.component.css'
})
export class ModifierOperationComponent implements OnInit {
  private readonly OperationService: OperationService =inject(OperationService);
  private readonly router: Router = inject(Router);
  readonly fb: FormBuilder = inject(FormBuilder);
  activatedroute: ActivatedRoute = inject(ActivatedRoute);
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  updateForm!: FormGroup;
  operationId!: number;
  ngOnInit(): void {
    this.operationId = Number(this.activatedroute.snapshot.paramMap.get('id')); // Get the operation ID from the route
    this.updateForm = this.fb.group({
      id: [0, Validators.required],
      dateVidange: ['', Validators.required],
      dateAssurance: ['', Validators.required],
      dateVisite: ['', Validators.required]
    });
  
  }

  naviguerVersOperation() {
    this.router.navigate(['/operation']);
  }

  get id(){
    return this.updateForm.get('id');
  }
  get dateVidange(){
    return this.updateForm.get('dateVidange');
  }
  get dateAssurance(){
    return this.updateForm.get('dateAssurance');
  }
  get dateVisite(){
    return this.updateForm.get('dateVisite');
  }
  onSubmit(): void {
    if (this.updateForm.valid) {
      const operationId = this.updateForm.value.id; // Get the operation ID from the form
      const updatedOperation = {
        dateVidange: this.updateForm.value.dateVidange,
        dateAssurance: this.updateForm.value.dateAssurance,
        dateVisite: this.updateForm.value.dateVisite
      };

      this.OperationService.updateOperation(operationId, updatedOperation).subscribe({
        next: (response) => {
          console.log('Operation updated successfully', response);
          alert('Opération modifiée avec succès');
          this.router.navigate(['/operation']); // Redirect to the list of operations
        },
        error: (error) => {
          console.error('Error updating operation', error);
          alert('Erreur lors de la modification de l\'opération');
        }
      });
    } else {
      alert('Veuillez remplir tous les champs requis.');
    }
  }
}
