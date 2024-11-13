import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CallbackendService } from './callbackend.service';
import { User } from './user.service';

interface UserLogin {
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService: CallbackendService, private http: HttpClient) { }

  login(username: string, password: string): Observable<User> {

    const userLogin: UserLogin = { username: username, password: password };

    return this.http.post<User>(`${this.apiService.baseUrl}/user/login`, userLogin);

  }



}
