import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ReimbursementService } from 'src/app/services/reimbursements/reimbursement.service';

@Component({
  selector: 'app-reimb-request',
  templateUrl: './reimb-request.component.html',
  styleUrls: ['./reimb-request.component.css']
})
export class ReimbRequestComponent implements OnInit {
    firstName: any;
    value: any;
    reimbCreateModel = {
    amount: 0,
    description: '',
    type_id: '',
    author_id: ''
  };

  constructor(private cookie: CookieService,
              private router: Router,
              private reimbService: ReimbursementService) { }

  ngOnInit() {
    this.firstName = this.cookie.get('firstName');
    this.reimbCreateModel.author_id = this.cookie.get('user_id');
  }

  logout() {
    this.cookie.deleteAll();
    this.router.navigateByUrl('/login');
  }

  cancelRequest(){
    switch(this.cookie.get('financeManager')){
      case '1': this.router.navigateByUrl('/emp-menu');break;
      case '2': this.router.navigateByUrl('/fm-menu'); break;
      default: this.router.navigateByUrl('/login');
    }
  }

  submitRequest(){
    console.log(this.reimbCreateModel);
    this.reimbService.createReimb(this.reimbCreateModel).subscribe ((payload) => {});
    switch(this.cookie.get('financeManager')){
      case '1': this.router.navigateByUrl('/emp-menu');break;
      case '2': this.router.navigateByUrl('/fm-menu'); break;
      default: this.router.navigateByUrl('/login');
    }
  }

  selectedType(event: any){
    switch(event.target.value){
      case 'LODGING': this.value = 1; break;
      case 'TRAVEL':  this.value = 2; break;
      case 'FOOD':    this.value = 3; break;
      case 'OTHER':   this.value = 4; break;
    }
    //console.log(this.reimbCreateModel.type_id);
    this.reimbCreateModel.type_id = this.value;
  }
}
