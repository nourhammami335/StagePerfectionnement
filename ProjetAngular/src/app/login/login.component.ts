import { Component,inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import{FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterOutlet,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
 LoginForm!: FormGroup;
  readonly fb: FormBuilder = inject(FormBuilder);
  constructor(private authService: AuthService,private router: Router) {}
 ngOnInit(): void {
    this.LoginForm = this.fb.nonNullable.group({
      login: ['', [Validators.required]],
      motdepasse: ['', [Validators.required]]
   
    });
  }
  /*onSubmit(pass: string) {
    if (pass === 'conducteur123') {
      this.router.navigate(['/MenuConducteur']);
    } else if (pass === 'chef123') {
      this.router.navigate(['/menu']);
    } else {
      alert('Mot de passe incorrect !');
    }
  }*/
    /*login: string = '';
    motdepasse: string = '';
    message: string = '';*/
    get login() {
      return this.LoginForm.get('login');
    }
    get motdepasse() {
      return this.LoginForm.get('motdepasse');
    }
  
    onSubmit() {
      if (this.LoginForm.valid) {
        const { login, motdepasse } = this.LoginForm.value; // Get the values from the form
        this.authService.login(login, motdepasse).subscribe(
          response => {
            console.log('Response:', response);
            // Store user information in localStorage
            localStorage.setItem('user', response);
            
            this.authService.setAuthenticated(true);
            // Redirect user based on their role
            if (response.includes("Redirect to Admin Menu")) {
              this.router.navigate(['/menu']);
              
               // Replace with your admin route
            } else {
              this.router.navigate(['/MenuConducteur']); // Replace with your user route
            }
            
          // },
          // (error) => {
            
          //   console.error('Login failed', error);
          //   alert('Identifiants invalides');
          }
        );
      } else {
        alert('Identifiants invalides');
        // alert('Please fill in all required fields.');
      }
    }
}
