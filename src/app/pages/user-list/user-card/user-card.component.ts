import { Component, input } from '@angular/core';
import { UserList } from '../../../models/users.model';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styles: ``,
})
export class UserCardComponent {
  user = input.required<UserList>();
}
