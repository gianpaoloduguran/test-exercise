import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserListComponent } from './pages/user-list/user-list.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ProfileComponent,
  },
  {
    path: 'exercise-2',
    component: UserListComponent,
  },
];
