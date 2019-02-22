import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ReimbursementService } from 'src/app/services/reimbursements/reimbursement.service';

@Component({
  selector: 'app-emp-menu',
  templateUrl: './emp-menu.component.html',
  styleUrls: ['./emp-menu.component.css']
})
export class EmpMenuComponent implements OnInit {
  firstName = "";
  reimbInfo: any;
  empMenuTitle: string;
  activeTickets: number;

  constructor(private cookie: CookieService,
              private router: Router,
              private reimbService: ReimbursementService) { }

  ngOnInit() {
    this.firstName = this.cookie.get('firstName');
    this.displayReimbInfo("Active Reimbursement Tickets", 1);
  }

  logout() {
    this.cookie.deleteAll();
    this.router.navigateByUrl('/login');
  }

  newRequest(){
    this.router.navigateByUrl('/reimb-request');
  }

  displayReimbInfo(title: string, currStatus: number): any{
      this.empMenuTitle = title;
      this.reimbService.getReimbById(currStatus).subscribe ((payload) => {
      this.reimbInfo = payload;

      if(currStatus == 1){
        this.activeTickets = payload.length;
      }
    });
  }
}
