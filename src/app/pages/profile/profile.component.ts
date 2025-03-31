import { Component } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-profile',
  imports: [UserProfileComponent, RouterLink, HeaderComponent],
  templateUrl: './profile.component.html',
  styles: ``,
})
export class ProfileComponent {}
