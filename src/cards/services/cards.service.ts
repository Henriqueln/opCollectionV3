import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../../app/shared/config';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private headers = new HttpHeaders({
    Authorization: 'Basic ' + btoa('admin:1234'), // Encode username:password
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    let request = { "selector": {}, "limit": 999999 }
    return this.http.post<any>(`${apiUrl}/cards/_find`, request, { headers: this.headers })
      .pipe(map(response => {
        return response.docs.sort((a: Card, b: Card) => a.code.localeCompare(b.code))
      }));
  }

  createCard(card: Card): Observable<Card> {
    return this.http.post<Card>(`${apiUrl}/cards`, card, { headers: this.headers });
  }

  updateCard(request: Card) {
    return this.http.put<any>(`${apiUrl}/cards/${request._id}`, request, { headers: this.headers });
  }
}
