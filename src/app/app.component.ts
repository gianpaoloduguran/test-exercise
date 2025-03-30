import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <!-- <h1 class="text-3xl">Welcome to {{ title }}!</h1> -->
    <app-header />
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'exercise';
}
