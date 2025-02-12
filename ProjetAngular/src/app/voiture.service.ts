import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voiture } from './voiture';
@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  private apiUrl = 'http://localhost:8090/api/voitures'; // URL de l'API Spring Boot

  constructor(private http: HttpClient) {}

  getVoitures(): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(this.apiUrl);
  }
  getVoiture(immatriculation: string): Observable<Voiture> {
    return this.http.get<Voiture>(`${this.apiUrl}/${immatriculation}`);
  }
  createVoiture(voiture: Voiture): Observable<Voiture> {
    return this.http.post<Voiture>(this.apiUrl, voiture);
  }
  deleteVoiture(immatriculation: string){
    return this.http.delete<void>(`${this.apiUrl}/${immatriculation}`);
  }
  updateConducteur(immatriculation: string, conducteurNumero: string): Observable<Voiture> {
    const url = `${this.apiUrl}/${immatriculation}/conducteur`;
    return this.http.put<Voiture>(url, conducteurNumero); // Send conducteurNumero as the request body
  }
  getVoituresByConducteur(conducteur: string): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(`${this.apiUrl}/conducteur/${conducteur}`);
  }

   // New method for searching
   searchVoitures(term: string): Observable<Voiture[]> {
    return this.http.get<Voiture[]>(`${this.apiUrl}/search?term=${term}`);
  }
}
