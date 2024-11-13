import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/service/backend/login.service';
import { User } from 'src/app/shared/service/backend/user.service';

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

    if (sessionStorage.getItem("id")) {
      console.log("Session set, redirect to home")
      this.router.navigate(['/']);

    }

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

    this.loginService.login(username, password).subscribe((user: User) => {

      sessionStorage.setItem("username", user.username)
      sessionStorage.setItem("id", "" + user.id)
      console.log("Session Set")
      this.router.navigate(['/']);
    });

  }
}
