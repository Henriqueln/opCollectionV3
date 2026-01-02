import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SupportString } from '../models/support-string';
import { apiUrl } from '../../shared/config';

@Injectable({
  providedIn: 'root'
})
export class SupportStringsService {

  private headers = new HttpHeaders({
    Authorization: 'Basic ' + btoa('admin:1234'), // Encode username:password
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getSupportStrings(): Observable<SupportString> {
    let request = { "selector": {}, "limit": 999999 }
    return this.http.post<any>(`${apiUrl}/support-strings/_find`, request, { headers: this.headers })
      .pipe(map(response => { return response.docs[0] }));
  }

  updateSupportStrings(supportString: SupportString): Observable<any> {
    return this.http.put<any>(`${apiUrl}/support-strings/${supportString._id}`, supportString, { headers: this.headers })
  }
}
