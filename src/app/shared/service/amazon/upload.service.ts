import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CallbackendService } from '../backend/callbackend.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private apiService: CallbackendService, private http: HttpClient) { }
  private endpointBase = 'fileUpload';



  fileUpload(file: FormData) {
    return this.http.post(`${this.apiService.baseUrl}/${this.endpointBase}/uploadDocument`, file);
  }


}
