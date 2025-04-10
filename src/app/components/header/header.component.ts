import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  template: `
    <div
      class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <button class="text-xl font-bold cursor-pointer" routerLink="/">
        {{ title() }}
      </button>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  title = input.required<string>();
}
