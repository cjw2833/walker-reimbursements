import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cookieValue = 'UNKNOWN';
  credentials = {
    username: '',
    password: ''
  };

  constructor(private router: Router, 
              private loginService: LoginService,
              private cookie: CookieService) { }

  ngOnInit() {
  }

  login(): any{
    this.loginService.login(this.credentials).subscribe ((payload) => {
      const financeManager = payload.financeManager;
      this.cookie.set('user_id', payload.id);
      this.cookie.set('firstName', payload.firstName);
      this.cookie.set('financeManager', financeManager);
      switch(financeManager){
        case 1: this.router.navigateByUrl('/emp-menu');break;
        case 2: this.router.navigateByUrl('/fm-menu'); break;
        default: this.router.navigateByUrl('/login');
      }
    });
  }
}