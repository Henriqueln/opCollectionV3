import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Set } from '../models/set';
import { apiUrl } from '../../app/shared/config';

@Injectable({
  providedIn: 'root'
})
export class SetsService {

  private headers = new HttpHeaders({
    Authorization: 'Basic ' + btoa('admin:1234'), // Encode username:password
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getSets(): Observable<Set[]> {
    let request = { "selector": {}, "limit": 999999 }
    return this.http.post<any>(`${apiUrl}/sets/_find`, request, { headers: this.headers })
      .pipe(map(response => { return response.docs }));
  }

  createSet(request: Set) {
    return this.http.post<any>(`${apiUrl}/sets`, request, { headers: this.headers })
  }

}
