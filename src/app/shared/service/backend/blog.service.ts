import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CallbackendService } from './callbackend.service';


export interface Blog {
  id: number;
  name: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private endpointBase = 'blog'; // L'endpoint pour obtenir les utilisateurs

  constructor(private apiService: CallbackendService, private http: HttpClient) { }


  // Méthode pour obtenir les utilisateurs
  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiService.baseUrl}/${this.endpointBase}/`);
  }

  // Méthode pour obtenir les utilisateurs
  getActifsBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${this.apiService.baseUrl}/${this.endpointBase}/actifs`);
  }

  getBlog(id: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiService.baseUrl}/${this.endpointBase}/${id}`);
  }

  createBlog(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(`${this.apiService.baseUrl}/${this.endpointBase}`, blog);
  }

  updateBlog(id: string, blog: Blog): Observable<Blog> {
    console.log("updateBlog")
    return this.http.put<Blog>(`${this.apiService.baseUrl}/${this.endpointBase}/${id}`, blog);
  }

  deleteBlog(id: string): Observable<Blog> {
    return this.http.delete<Blog>(`${this.apiService.baseUrl}/${this.endpointBase}/${id}`);
  }
}
