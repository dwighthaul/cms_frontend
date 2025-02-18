import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CallbackendService } from './callbackend.service';


export interface Detail {
  id: number;
  date_traitement: string;
  result: string;
  latitude: number;
  longitude: number;
  station_name: string;
  station_id: string;
  createdAt: string;
  updatedAt: string;
  alertId: number;
}

export interface Alert {
  id: number;
  name: string;
  date_debut: string;
  date_fin: string;
  latitude: number;
  longitude: number;
  is_actif: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  details: Detail[];
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private endpointBase = 'alert'; // L'endpoint pour obtenir les utilisateurs

  constructor(private apiService: CallbackendService, private http: HttpClient) { }


  // Méthode pour obtenir les utilisateurs
  getAlerts(): Observable<Alert[]> {
    return this.http.get<Alert[]>(`${this.apiService.baseUrl}/${this.endpointBase}/`);
  }

  // Méthode pour obtenir les utilisateurs
  getActifsAlerts(): Observable<Alert[]> {
    return this.http.get<Alert[]>(`${this.apiService.baseUrl}/${this.endpointBase}/actifs`);
  }

  getAlert(id: string): Observable<Alert> {
    return this.http.get<Alert>(`${this.apiService.baseUrl}/${this.endpointBase}/${id}`);
  }

  createAlert(blog: Alert): Observable<Alert> {
    return this.http.post<Alert>(`${this.apiService.baseUrl}/${this.endpointBase}`, blog);
  }

  updateAlert(id: string, blog: Alert): Observable<Alert> {
    console.log("updateAlert")
    return this.http.put<Alert>(`${this.apiService.baseUrl}/${this.endpointBase}/${id}`, blog);
  }

  deleteAlert(id: string): Observable<Alert> {
    return this.http.delete<Alert>(`${this.apiService.baseUrl}/${this.endpointBase}/${id}`);
  }
}
