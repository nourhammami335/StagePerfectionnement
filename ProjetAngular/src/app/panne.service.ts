import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Panne } from './panne';

@Injectable({
  providedIn: 'root'
})
export class PanneService {

  private apiUrl = 'http://localhost:8090/api/pannes';

  constructor(private http: HttpClient) { }

  createPanne(panne: Panne): Observable<Panne> {
    return this.http.post<Panne>(this.apiUrl, panne);
  }

  getPannes(): Observable<Panne[]> {
    return this.http.get<Panne[]>(this.apiUrl);
  }
  // panne.service.ts
getPanneCount(): Observable<number> {
  return this.http.get<number>(`${this.apiUrl}/count`);
}
deletePanne(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
getPannesByConducteur(conducteurNumero: string): Observable<Panne[]> {
  return this.http.get<Panne[]>(`${this.apiUrl}/conducteur/${conducteurNumero}`);
}
updateStatut(id: number, statut: string): Observable<Panne> {
  return this.http.put<Panne>(`${this.apiUrl}/${id}/statut?statut=${statut}`, {});
}
}
