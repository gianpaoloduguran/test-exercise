import { Component } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [UserProfileComponent, RouterLink],
  templateUrl: './profile.component.html',
  styles: ``,
})
export class ProfileComponent {}
