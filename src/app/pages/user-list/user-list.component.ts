import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserList } from '../../models/users.model';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  imports: [UserCardComponent],
  template: `
    <p class="item-center">Users</p>
    <div class="p-4 grid grid-cols-4 gap-4">
      @for (item of users; track item.id){
      <app-user-card [user]="item" />
      }
    </div>
  `,
  styles: ``,
})
export class UserListComponent implements OnInit {
  // userService = inject(UserService);
  users: UserList[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
