import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  submitted = false;
  loginError = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
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
    const { email, password } = this.loginForm.value;
    if (email === 'user@example.com' && password === 'password') {
      // Simulate successful login
      this.router.navigate(['/dashboard']);
    } else {
      // Show login error
      this.loginError = true;
    }
  }
}
