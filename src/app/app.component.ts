import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './pages/profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProfileComponent],
  template: `
    <!-- <h1 class="text-3xl">Welcome to {{ title }}!</h1> -->
    <app-header />
    <app-profile name="Gian" email="paoloduguran@gmail.com" />
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'exercise';
}
