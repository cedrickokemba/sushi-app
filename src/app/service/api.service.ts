import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Box } from '../models/Box';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBox(): Observable<any> {
    return this.http.get('http://localhost:8080/api/boxes')
  }
}
