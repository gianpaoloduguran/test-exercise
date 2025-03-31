import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <!-- <app-header /> -->
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'exercise';
}
