import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { CreditCardFormComponent } from './pages/credit-card-form/credit-card-form.component';

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
  {
    path: 'exercise-5',
    component: CreditCardFormComponent,
  },
];
