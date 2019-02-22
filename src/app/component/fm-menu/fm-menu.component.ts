import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ReimbursementService } from 'src/app/services/reimbursements/reimbursement.service';

@Component({
  selector: 'app-fm-menu',
  templateUrl: './fm-menu.component.html',
  styleUrls: ['./fm-menu.component.css']
})
export class FmMenuComponent implements OnInit {
  firstName = "";
  reimbInfo: any;
  fmMenuTitle: string;
  allActiveTickets: number;
  myActiveTickets: number;
  myReimb: boolean;
  cStatus: number;
  fmMenu: boolean;
  fmPending: boolean;
  currentUserid: any;
  
  constructor(private cookie: CookieService,
              private router: Router,
              private reimbService: ReimbursementService) { }

  ngOnInit() {
    this.firstName = this.cookie.get('firstName');
    this.currentUserid = this.cookie.get('user_id');
    this.displayAllReimbInfo("All Active Reimbursement Tickets", 1);
  }

  logout() {
    this.cookie.deleteAll();
    this.router.navigateByUrl('/login');
  }

  newRequest(){
    this.router.navigateByUrl('/reimb-request');
  }

  displayMyReimbInfo(title: string, currStatus: number): any{
      this.fmMenuTitle = title;
      this.fmPending = false;
      this.reimbService.getReimbById(currStatus).subscribe(
        (payload) => {
            this.reimbInfo = payload;
            if(currStatus == 1) {
              this.myActiveTickets = payload.length;
              
          }
    });
  }

  displayAllReimbInfo(title: string, currStatus: number): any{
    this.fmMenuTitle = title;
    this.fmMenu = true;
    this.cStatus = currStatus;
    this.fmPending = (this.fmMenu && (this.cStatus==1));
    this.reimbService.getAllReimbs(currStatus).subscribe(
      (payload) => {
        this.reimbInfo = payload;
        if(currStatus == 1){
          this.allActiveTickets = payload.length;
        }
    });
  }

  isMyReimb(i: number): boolean{
    if(this.reimbInfo[i].author_id == this.currentUserid){
      return true;
    }else {
      return false;
    }
  }

  approve(i: number){
    console.log("Approved! - " + this.reimbInfo[i].id);
    const ur = {
      resolver_id: this.currentUserid,
      id: this.reimbInfo[i].id,
      explaination: this.reimbInfo[i].explaination,
      status_id: 2
    };
    console.log(ur);
    this.reimbService.updateReimb(ur).subscribe ((payload) => {
      this.firstName = this.cookie.get('firstName');
      this.currentUserid = this.cookie.get('user_id');
      this.displayAllReimbInfo("All Active Reimbursement Tickets", 1);
    });

  }

  deny(i: number){
    console.log("Deny! - " + this.reimbInfo[i].id);
      const ur = {
        resolver_id: this.currentUserid,
        id: this.reimbInfo[i].id,
        explaination: this.reimbInfo[i].explaination,
        status_id: 3
      };
      console.log(ur);
    this.reimbService.updateReimb(ur).subscribe ((payload) => {
      this.firstName = this.cookie.get('firstName');
      this.currentUserid = this.cookie.get('user_id');
      this.displayAllReimbInfo("All Active Reimbursement Tickets", 1);
    });
  }
}

