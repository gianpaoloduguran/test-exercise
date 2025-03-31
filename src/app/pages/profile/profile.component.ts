import { Component } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-profile',
  imports: [UserProfileComponent],
  templateUrl: './profile.component.html',
  styles: ``,
})
export class ProfileComponent {}
