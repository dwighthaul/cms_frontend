import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/service/backend/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  submitted = false;
  loginError = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  // Getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loginError = false;

    if (this.loginForm.invalid) {
      return;
    }

    // Replace this with your real authentication logic


    const { username, password } = this.loginForm.value;

    this.loginService.login(username, password).subscribe(() => {

      sessionStorage

    });

    if (username === 'user@example.com' && password === 'password') {
      // Simulate successful login
      this.router.navigate(['/dashboard']);
    } else {
    }
  }
}
