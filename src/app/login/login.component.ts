import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor (private _auth:AuthService, private _router: Router){}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  login(){
    this._auth.login(this.loginForm.value).subscribe({
      next: () => {
        this._router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
