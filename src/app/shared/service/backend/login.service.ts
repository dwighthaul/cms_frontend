import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CallbackendService } from './callbackend.service';

interface UserLogin {
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService: CallbackendService, private http: HttpClient) { }

  login(username: string, password: string) {

    const userLogin: UserLogin = { username: username, password: password };

    return this.http.post<UserLogin>(`${this.apiService.baseUrl}/user/login`, userLogin);

  }



}
