import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  template: `
    <div
      class="bg-white rounded-xl flex flex-col relative w-full max-w-[250px] h-[320px] shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <!-- Image covering the top part -->
      <div class="w-full h-[240px]">
        <img
          src="/random.jpg"
          class="w-full h-full object-cover rounded-t-xl"
        />
      </div>

      <!-- User details -->
      <div class="flex flex-col flex-1 p-4">
        <span class="text-md font-bold">{{ 'Name: ' + name() }}</span>
        <span class="text-sm">{{ 'Email: ' + email() }}</span>
      </div>
    </div>
  `,
  styles: ``,
})
export class UserProfileComponent {
  name = input.required<string>();
  email = input.required<string>();
}
