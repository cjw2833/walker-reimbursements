import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUserInfo(){
    return [
        {
          user_id: 6,
          username: 'lesvegas',
          firstName: 'Lester',
          lastName: 'Turner',
          email: 'lesvegas@gmail.com',
          isFinanceMan: false
        }
    ];
  }
}
