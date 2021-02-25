import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersDuringSession: User[];

  constructor(private http: HttpClient) {}

  getAllUsers() {
    const url: string = 'https://jsonplaceholder.typicode.com/users';

    return this.http.get(url);
  }

  storeToUserServise(users: User[]) {
    this.usersDuringSession = users;
  }

  activateUser(user: User, activated: boolean) {
    let indexOfSelectedUser = this.usersDuringSession.findIndex(
      (userDuringSession: User) => userDuringSession.id == user.id
    );

    this.usersDuringSession[indexOfSelectedUser].activated = activated;
  }

  getUsersDuringSession() {
    return this.usersDuringSession;
  }
}
