import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CallbackendService } from './callbackend.service';
import { Role } from './user.service';

@Injectable({
	providedIn: 'root'
})
export class RoleService {

	private endpointBase = 'role'; // L'endpoint pour obtenir les utilisateurs

	constructor(private apiService: CallbackendService, private http: HttpClient) { }

	// Méthode pour obtenir les utilisateurs
	getRoles(): Observable<Role[]> {
		return this.http.get<Role[]>(`${this.apiService.baseUrl}/${this.endpointBase}/`);
	}

	// Get role by ID
	getRoleById(id: number): Observable<Role> {
		return this.http.get<Role>(`${this.apiService.baseUrl}/${this.endpointBase}/${id}`);
	}

	// Create a new role
	createRole(role: Role): Observable<Role> {
		return this.http.post<Role>(`${this.apiService.baseUrl}/${this.endpointBase}`, role);
	}

	// Update an existing role
	updateRole(id: number, role: Role): Observable<Role> {
		return this.http.put<Role>(`${this.apiService.baseUrl}/${this.endpointBase}/${id}`, role);
	}

	// Delete a role
	deleteRole(id: number): Observable<void> {
		return this.http.delete<void>(`${this.apiService.baseUrl}/${this.endpointBase}/${id}`);
	}
}
