import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FmMenuComponent } from './component/fm-menu/fm-menu.component';
import { LoginComponent } from './component/login/login.component';
import { EmpMenuComponent } from './component/emp-menu/emp-menu.component';
import { UserService } from './services/users/user.service';
import { ReimbursementService } from './services/reimbursements/reimbursement.service';
import { StatusPipePipe } from './pipes/status-pipe.pipe';
import { LoginService } from './services/login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { TypePipePipe } from './pipes/type-pipe.pipe';
import { ReimbRequestComponent } from './component/reimb-request/reimb-request.component';
import { TypePipeTwoPipe } from './pipes/type-pipe-two.pipe';
import { StatusPipeTwoPipe } from './pipes/status-pipe-two.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FmMenuComponent,
    LoginComponent,
    EmpMenuComponent,
    StatusPipePipe,
    TypePipePipe,
    ReimbRequestComponent,
    TypePipeTwoPipe,
    StatusPipeTwoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, ReimbursementService, LoginService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
