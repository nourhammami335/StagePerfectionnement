import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operation } from './operation';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private apiUrl = 'http://localhost:8090/operations';

  constructor(private http: HttpClient) { }

  getOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.apiUrl);
  }

  getOperation(id: number): Observable<Operation> {
    return this.http.get<Operation>(`${this.apiUrl}/${id}`);
  }

  createOperation(operation: Operation): Observable<Operation> {
    return this.http.post<Operation>(this.apiUrl, operation);
  }

  deleteOperation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  updateOperation(id: number, operation: Partial<Operation>): Observable<Operation> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Operation>(url, operation); // Send the operation object with updated fields
  }
  getOperationsByImmatriculation(immatriculation: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?immatriculation=${immatriculation}`);
  }
}