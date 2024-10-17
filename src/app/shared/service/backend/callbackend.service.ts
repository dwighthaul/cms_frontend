import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CallbackendService {

  // @TODO : Recuperer depuis la configuration
  // public baseUrl = 'https://mycmsdemo.com'; // URL de base de l'API
  public baseUrl = 'http://localhost:3000'; // URL de base de l'API

  constructor(private http: HttpClient) { }

  // GET request
  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`);
  }

  // POST request
  postData(endpoint: string, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/${endpoint}`, data, { headers });
  }

  // PUT request
  updateData(endpoint: string, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseUrl}/${endpoint}`, data, { headers });
  }

  // DELETE request
  deleteData(endpoint: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${endpoint}`);
  }



}
