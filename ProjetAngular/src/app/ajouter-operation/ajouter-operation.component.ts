import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { OperationService } from '../operation.service';
import { Operation } from '../operation';
import { Voiture } from '../voiture';
import { Conducteur } from '../conducteur';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-ajouter-operation',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './ajouter-operation.component.html',
  styleUrls: ['./ajouter-operation.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class AjouterOperationComponent implements OnInit {
  private readonly router: Router = inject(Router);
  private readonly operationService: OperationService = inject(OperationService);
  private readonly voitureService: VoitureService = inject(VoitureService);
  AjoutForm!: FormGroup;
  readonly fb: FormBuilder = inject(FormBuilder);
  operations: Operation[] = [];
  newOperation!: Operation;
  voitures: Voiture[] = [];

  ngOnInit(): void {
    this.AjoutForm = this.fb.nonNullable.group({
      id: [0, [Validators.required]],
      voiture: ['', [Validators.required]], // Field for existing voiture's immatriculation
      dateVidange: ['', [Validators.required]],
      dateAssurance: ['', [Validators.required]],
      dateVisite: ['', [Validators.required]]
    });
    this.loadOperations();
    this.loadVoitures();
    // Load existing operations
  }

  naviguerVersOperation() {
    this.router.navigate(['/operation']);
  }

  get id() {
    return this.AjoutForm.get('id');
  }
  get voiture() {
    return this.AjoutForm.get('voiture');
  }
  get dateVidange() {
    return this.AjoutForm.get('dateVidange');
  }
  get dateAssurance() {
    return this.AjoutForm.get('dateAssurance');
  }
  get dateVisite() {
    return this.AjoutForm.get('dateVisite');
  }

  loadOperations(): void {
    this.operationService.getOperations().subscribe(data => {
      this.operations = data;
    });
  }
  loadVoitures(): void {
    this.voitureService.getVoitures().subscribe(data => {
      this.voitures = data;
    });
  }

  onSubmit(): void {
    if (this.AjoutForm.valid) {
      const conducteur: Conducteur = {
        numero: '', // Get the conducteur number from the form
        nom: '', // You can leave these empty or set default values
        prenom: '',
        age: 0,
        sexe: '',
        email: '',
        adresse: '',
        departement: '',
        login: '',
        motdepasse: ''
    };
      const voiture : Voiture = {
        immatriculation: this.AjoutForm.value.voiture,
        modele: 'null', // Set to null as per API expectations
        marque: 'null', // Set to null as per API expectations
        carburant: 'null', // Set to null as per API expectations
        conducteur // Set to null as per API expectations
      };
      // Create the new Operation instance
      this.newOperation = {
          id: this.AjoutForm.value.id,
          voiture,
          dateVidange:this.AjoutForm.value.dateVidange,
          dateAssurance:this.AjoutForm.value.dateAssurance,
          dateVisite:this.AjoutForm.value.dateVisite
      };

      console.log(this.newOperation); // Log the new operation object

      // Call the service to create the operation
      this.operationService.createOperation(this.newOperation).subscribe(() => {
        this.loadOperations();
        this.AjoutForm.reset(); // Reset the form after submission
        this.router.navigate(['/operation']); // Navigate to the desired route
      // }, error => {
      //   console.error('Error creating operation:', error); // Log the error details
      });
    } else {
      console.log('Form is invalid');
    }
  }

  // Helper function to format date to ISO 8601
  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString(); // Convert to ISO 8601 format
  }
}