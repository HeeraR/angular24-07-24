import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4200/login'; 

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = JSON.stringify({ email, password });

    return this.http.post<any>(this.apiUrl, body, { headers })
      .pipe(
        tap(response => {
          if (response && response.token && response.token_type) {
            localStorage.setItem('access_token', response.token);
            localStorage.setItem('token_type', response.token_type);
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('access_token');
  }
}
