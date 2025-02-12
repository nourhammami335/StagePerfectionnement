import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Panne } from './panne';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8090/api/auth/login'; // Remplacez par l'URL de votre API
  private isAuthenticated = false;// Flag to track authentication state
  private baseUrl = 'http://localhost:8090/api/auth';
  private userLogin: string | null = null; 
  constructor(private http: HttpClient, private router: Router) {}

  login(login: string, motdepasse: string): Observable<string> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new HttpParams()
      .set('login', login)
      .set('motdepasse', motdepasse);

    return this.http.post(this.apiUrl, body.toString(), { headers, responseType: 'text' }).pipe(
      tap(() => {
        this.isAuthenticated = true; // Mettre à jour l'état d'authentification
        this.userLogin = login; // Stocker le login de l'utilisateur
      }));
  }


   // Méthode pour obtenir les informations du compte
   getMonCompte(): Observable<any> {
    if (this.userLogin) {
      return this.http.get(`${this.baseUrl}/mon-compte?login=${this.userLogin}`);
    }
    return of(null); // Retourner null si l'utilisateur n'est pas connecté
  }


    // Méthode pour obtenir les informations de la voiture
    getMaVoiture(): Observable<any> {
      if (this.userLogin) {
        return this.http.get(`${this.baseUrl}/ma-voiture?login=${this.userLogin}`);
      }
      return of(null); // Retourner null si l'utilisateur n'est pas connecté
    }
    
    // getMaPanne(): Observable<any> {
    //   if (this.userLogin) {
    //     return this.http.get(`${this.baseUrl}/ma-panne?login=${this.userLogin}`);
    //   }
    //   return of(null); 
      
    // }

  /*logout() {
    // Logique de déconnexion
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }*/
    setAuthenticated(value: boolean) {
      this.isAuthenticated = value; // Set the authentication state
    }
  
    isLoggedIn(): boolean {
      return this.isAuthenticated; // Return the authentication state
    }
  
    logout() {
      this.isAuthenticated = false; // Réinitialiser l'état d'authentification
      this.userLogin = null; // Réinitialiser le login de l'utilisateur
      this.router.navigate(['/']); // Rediriger vers la page d'accueil
    }
}
