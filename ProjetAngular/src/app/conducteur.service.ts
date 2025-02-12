import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conducteur } from './conducteur';

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {

  private apiUrl = 'http://localhost:8090/api/conducteurs'; // URL de l'API Spring Boot

  constructor(private http: HttpClient) {}

  getConducteurs(): Observable<Conducteur[]> {
    return this.http.get<Conducteur[]>(this.apiUrl);
  }

  createConducteur(conducteur: Conducteur): Observable<Conducteur> {
    return this.http.post<Conducteur>(`${this.apiUrl}`, conducteur);
  }
  
 getConducteur(numero: string): Observable<Conducteur> {
  return this.http.get<Conducteur>(`${this.apiUrl}/${numero}`);
}
deleteConducteur(numero: string): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${numero}`);
}
// updateLoginAndPassword(numero: string, login: string, motdepasse: string): Observable<any> {
//   const payload = { login, motdepasse };
//   return this.http.put(`${this.apiUrl}/${numero}`, payload);
// }

updateLoginAndPassword(numero: string, updatedFields: Partial<{ login: string; motdepasse: string }>): Observable<Conducteur> {
  return this.http.put<Conducteur>(`${this.apiUrl}/update/${numero}?login=${updatedFields.login}&motdepasse=${updatedFields.motdepasse}`, {});
}
searchConducteurs(term: string): Observable<Conducteur[]> {
  return this.http.get<Conducteur[]>(`${this.apiUrl}/search?term=${term}`);
}


}
