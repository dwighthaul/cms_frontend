import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CallbackendService } from './callbackend.service';

export interface DynamicContent {
  id: number;
  name: string;
  content: string;
  code: string;
  is_actif: boolean;
  createdAt: string;
  updatedAt: string;
}


@Injectable({
  providedIn: 'root'
})
export class DynamicContentService {

  private endpointBase = 'dynamicContent';

  constructor(private apiService: CallbackendService, private http: HttpClient) { }

  // Méthode pour obtenir les utilisateurs
  getDynamicContent(): Observable<DynamicContent[]> {
    return this.http.get<DynamicContent[]>(`${this.apiService.baseUrl}/${this.endpointBase}/getDynamicContent`);
  }

  // Méthode pour obtenir les utilisateurs
  getDynamicContentByCode(code: string): Observable<DynamicContent> {
    return this.http.get<DynamicContent>(`${this.apiService.baseUrl}/${this.endpointBase}/getDynamicContentByCode?code=` + code);
  }


  // Create a new dynamicContent
  createDynamicContent(dynamicContent: DynamicContent): Observable<DynamicContent> {
    return this.http.post<DynamicContent>(`${this.apiService.baseUrl}/${this.endpointBase}`, dynamicContent);
  }

  // Update an existing dynamicContent
  updateDynamicContent(id: number, dynamicContent: DynamicContent): Observable<DynamicContent> {
    console.log("updateDynamicContent - 2")

    return this.http.put<DynamicContent>(`${this.apiService.baseUrl}/${this.endpointBase}/${id}`, dynamicContent);
  }


}
