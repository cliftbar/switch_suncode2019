import { Injectable } from '@angular/core';

@Injectable()
export class AdminProvider {
  public currentUser: any;

  public setCurrentUser(user) {
    this.currentUser = user;
  }

}
