import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = '127.0.0.1:8080';
  constructor(private http: HttpClient) { }

  // Método para enviar dados para a API
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para enviar dados para a API
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
