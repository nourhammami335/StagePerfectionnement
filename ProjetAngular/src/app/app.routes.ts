import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { MenuConducteurComponent } from './menu-conducteur/menu-conducteur.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { VoitureComponent } from './voiture/voiture.component';
import { ConducteurComponent } from './conducteur/conducteur.component';
import { AjouterVehiculeComponent } from './ajouter-vehicule/ajouter-vehicule.component';
import { OperationComponent } from './operation/operation.component';
import { AjouterConducteurComponent } from './ajouter-conducteur/ajouter-conducteur.component';
import { AjouterOperationComponent } from './ajouter-operation/ajouter-operation.component';
import { ModifierConducteurComponent } from './modifier-conducteur/modifier-conducteur.component';
import { ModifierVoitureComponent } from './modifier-voiture/modifier-voiture.component';
import { ModifierOperationComponent } from './modifier-operation/modifier-operation.component';
import { RechercheVehiculeComponent } from './recherche-vehicule/recherche-vehicule.component';
import { RechercheConducteurComponent } from './recherche-conducteur/recherche-conducteur.component';
import { RechercheOperationComponent } from './recherche-operation/recherche-operation.component';
import { authGuard } from './auth.guard';
import { CompteConducteurComponent } from './compte-conducteur/compte-conducteur.component';
import { VoitureDuConducteurComponent } from './voiture-du-conducteur/voiture-du-conducteur.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

export const routes: Routes = [
  {path:'',title:'login',component:LoginComponent},
  {path:'menu',title:'menu',component:MenuComponent, canActivate: [authGuard]},
  {path:'MenuConducteur',title:'MenuConducteur',component:MenuConducteurComponent, canActivate: [authGuard]},
  {path:'formulaire',title:'formulaire',component:FormulaireComponent, canActivate: [authGuard]},
  {path:'voiture',title:'voiture',component:VoitureComponent, canActivate: [authGuard]},
  {path:'operation',title:'operation',component:OperationComponent, canActivate: [authGuard]},
  {path:'conducteur',title:'conducteur',component:ConducteurComponent, canActivate: [authGuard]},
  {path:'AjouterConducteur',title:'AjouterConducteur',component:AjouterConducteurComponent, canActivate: [authGuard]},
  {path:'AjouterVehicule',title:'AjouterVehicule',component:AjouterVehiculeComponent, canActivate: [authGuard]},
  {path:'AjouterOperation',title:'AjouterOperation',component:AjouterOperationComponent, canActivate: [authGuard]},
  {path:'ModifierConducteur/:numero',title:'ModifierConducteur',component:ModifierConducteurComponent, canActivate: [authGuard]},
  {path:'ModifierVoiture/:immatriculation',title:'ModifierVoiture',component:ModifierVoitureComponent, canActivate: [authGuard]},
  {path:'ModifierOperation',title:'ModifierOperation',component:ModifierOperationComponent, canActivate: [authGuard]},
  {path:'RechercheVehicule',title:'RechercheVehicule',component:RechercheVehiculeComponent, canActivate: [authGuard]},
  {path:'RechercheConducteur',title:'RechercheConducteur',component:RechercheConducteurComponent, canActivate: [authGuard]},
  {path:'RechercheOperation',title:'RechercheOperation',component:RechercheOperationComponent, canActivate: [authGuard]},
  {path:'CompteConducteur',title:'CompteConducteur',component:CompteConducteurComponent, canActivate: [authGuard]},
  {path:'VoitureDuConducteur',title:'VoitureDuConducteur',component:VoitureDuConducteurComponent, canActivate: [authGuard]},
  {path:'reclamation',title:'reclamation',component:ReclamationComponent, canActivate: [authGuard]},
  {path:'alerts',title:'alerts',component:AlertsComponent},
  {path:' ' , redirectTo: '', pathMatch: 'full'},
{path:'**',title:'error',component:ErrorComponent}
];

