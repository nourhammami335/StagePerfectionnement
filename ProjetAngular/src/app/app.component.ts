import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { MenuConducteurComponent } from "./menu-conducteur/menu-conducteur.component";
import { FormulaireComponent } from "./formulaire/formulaire.component";
import { LoginComponent } from "./login/login.component";
import { VoitureComponent } from "./voiture/voiture.component";
import { ConducteurComponent } from "./conducteur/conducteur.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, MenuConducteurComponent, FormulaireComponent, LoginComponent, VoitureComponent, ConducteurComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetAngular';
}
