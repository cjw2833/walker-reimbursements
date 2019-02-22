import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credentials: any): Observable<any>{
    const url = 'http://localhost:8080/WalkerReimbursements/login';
    return this.httpClient.post(url, credentials);
  }
}
