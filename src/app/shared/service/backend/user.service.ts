import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CallbackendService } from './callbackend.service'; // Assurez-vous que le chemin est correct



export interface Role {
  id?: number;
  rolename: string;
  permissions: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  id: number;
  username: string;
  createdAt: string;
  updatedAt: string;
  Role: Role;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {



  private endpointBase = 'user'; // L'endpoint pour obtenir les utilisateurs

  constructor(private apiService: CallbackendService, private http: HttpClient) { }

  // Méthode pour obtenir les utilisateurs
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiService.baseUrl}/${this.endpointBase}/`);
  }

  // Create a new user
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiService.baseUrl}/${this.endpointBase}/`, user);
  }

  // Update a user
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiService.baseUrl}/${this.endpointBase}/${id}`, user);
  }

  // Delete a user
  deleteUser(id: number): Observable<any> {
    return this.http.delete<null>(`${this.apiService.baseUrl}/${this.endpointBase}/?id=${id}`);
  }

}