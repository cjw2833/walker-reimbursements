import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  constructor(private cookie: CookieService,
    private httpClient: HttpClient) { }

  // GET request to the EmpReimbsController
  getReimbById(currStatus: number): Observable<any> {
    const user_id = this.cookie.get("user_id");
    const url = `http://localhost:8080/WalkerReimbursements/emp?i=${user_id}&s=${currStatus}`;
    return this.httpClient.get(url);
  }

  // GET request to the FmReimbsComtroller
  getAllReimbs(currStatus: number): Observable<any>{
    const url = `http://localhost:8080/WalkerReimbursements/fm?s=${currStatus}`;
    return this.httpClient.get(url);
  }

  // POST request to the CreateReimbsController
  // uncomment call
  createReimb(cr: any): Observable<any>{
    console.log(cr)
    const url = `http://localhost:8080/WalkerReimbursements/create`;
    return this.httpClient.post(url, cr);
  }
 
   // POST request to the UpdateReimbsController
   // uncomment call
  updateReimb(ur: any): Observable<any> {
    console.log(ur);
    const url = `http://localhost:8080/WalkerReimbursements/update`;
    return this.httpClient.post(url, ur);
  }
}
