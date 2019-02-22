import { Component, OnInit } from '@angular/core';
import { rootRenderNodes } from '@angular/core/src/view';
import { UserService } from './services/users/user.service';
import { ReimbursementService } from './services/reimbursements/reimbursement.service';

//Root Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
    
  }

}
