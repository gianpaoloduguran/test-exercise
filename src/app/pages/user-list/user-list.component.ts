import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserList } from '../../models/users.model';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-user-list',
  imports: [UserCardComponent],
  template: `
    <h1 class="text-3xl text-gray-800 text-center m-10">List of Users</h1>
    <div class="flex justify-center">
      <div
        class="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-4"
      >
        @for (item of users; track item.id) {
        <app-user-card [user]="item" />
        }
      </div>
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
