import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { FmMenuComponent } from './component/fm-menu/fm-menu.component';
import { EmpMenuComponent } from './component/emp-menu/emp-menu.component';
import { ReimbRequestComponent } from './component/reimb-request/reimb-request.component';

const routes: Routes = [
  // redirect empty path to login
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'fm-menu',
    component: FmMenuComponent
  }, {
    path: 'emp-menu',
    component: EmpMenuComponent
  }, {
    path: 'reimb-request',
    component: ReimbRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
