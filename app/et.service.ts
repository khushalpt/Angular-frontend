//Service for HTTP Client methods
// The ETService will be used to get the data from the backend by calling spring boot APIs.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ET } from './et';

@Injectable({
  // declares that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class ETService {

  private baseURL = "http://localhost:8080/api/v1/technologies";

  constructor(private httpClient: HttpClient) { }
  
  getETList(): Observable<ET[]>{
    return this.httpClient.get<ET[]>(`${this.baseURL}`);
  }

  createET(et: ET): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, et);
  }

  getETById(id: number): Observable<ET>{
    return this.httpClient.get<ET>(`${this.baseURL}/${id}`);
  }

  updateET(id: number, et: ET): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, et);
  }

  deleteET(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}