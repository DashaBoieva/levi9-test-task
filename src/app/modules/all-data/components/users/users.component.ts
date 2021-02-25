import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from 'src/app/modules/shared/models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  usersSubscription: Subscription;
  usersAreFromBackEnd: boolean;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    let users: User[] = this.usersService.getUsersDuringSession();
    users ? this.getUsersFromSession() : this.getAllUsers();
  }

  getUsersFromSession() {
    this.users = this.usersService.getUsersDuringSession();
  }

  getAllUsers() {
    this.usersSubscription = this.usersService.getAllUsers().subscribe(
      (receivedUsers) => {
        const allReceivedUsers = Object.values(receivedUsers);

        this.users = allReceivedUsers.slice(0, 10);
        this.usersService.storeToUserServise(this.users);

        this.usersAreFromBackEnd = true;
      },
      (error) => console.log(error)
    );
  }

  ngOnDestroy() {
    // Unsubscribe only from existing observable
    if (this.usersAreFromBackEnd) {
      this.usersSubscription.unsubscribe();
    }
  }
}
