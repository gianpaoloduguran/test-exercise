import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserList } from '../../models/users.model';
import { UserCardComponent } from './user-card/user-card.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-user-list',
  imports: [UserCardComponent, RouterLink, HeaderComponent],
  template: `
    <app-header title="User List" />
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
    <div
      class="fixed left-1/2 bottom-5 -translate-x-1/2 max-w-lg flex justify-center"
    >
      <div class="flex flex-row">
        <button
          type="button"
          class="bg-gray-800 text-white rounded-l-md border-r border-gray-100 hover:bg-gray-700/80 cursor-pointer px-3 py-2"
          routerLink="/exercise-1"
        >
          <div class="flex flex-row align-middle">
            <svg
              class="w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p class="ml-2">Prev</p>
          </div>
        </button>
        <button
          type="button"
          class="bg-gray-800 text-white rounded-r-md border-l border-gray-200 hover:bg-gray-700/80 cursor-pointer px-3 py-2"
          routerLink="/exercise-3"
        >
          <div class="flex flex-row align-middle">
            <span class="mr-2">Next</span>
            <svg
              class="w-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
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
