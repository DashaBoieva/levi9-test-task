import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { UsersService } from 'src/app/modules/all-data/services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent implements OnInit {
  @Input() userData: User;

  activated: boolean | undefined;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.activated = this.userData.activated;
  }

  activate(userData: User): void {
    this.activated = !this.activated;

    this.usersService.activateUser(userData, this.activated);
  }
}
