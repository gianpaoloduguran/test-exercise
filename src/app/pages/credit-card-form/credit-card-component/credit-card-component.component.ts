import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-credit-card-component',
  imports: [],
  template: `
    <div class="relative">
      <div
        class="p-3 absolute inset-0 flex flex-col justify-between text-white"
      >
        <h3 class="text-lg font-bold absolute right-9 top-11">
          Blockbuster Bank Inc.
        </h3>

        <div class="font text-lg font-bold absolute left-8 top-28">
          <div class="card-number text-xl tracking-widest">
            {{ cardNumber() }}
          </div>
        </div>

        <div class="font text-md font-bold absolute left-35 top-42">
          <label>{{ cardCVV() }}</label>
        </div>

        <div class="font text-md font-bold absolute left-8 top-42">
          <label>{{ cardExpiryMonth() }} / {{ cardExpiryYear() }}</label>
        </div>

        <div class="font text-lg font-bold absolute left-8 top-50">
          <label class="block text-sm uppercase">{{ cardHolderName() }}</label>
        </div>
      </div>
      <div class="w-full">
        <svg
          class="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          viewBox="0 49 256 160"
          xml:space="preserve"
        >
          <g
            style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
          >
            <path
              d="M 84.83 72.913 H 5.17 c -2.855 0 -5.17 -2.315 -5.17 -5.17 V 22.257 c 0 -2.855 2.315 -5.17 5.17 -5.17 h 79.66 c 2.855 0 5.17 2.315 5.17 5.17 v 45.485 C 90 70.598 87.685 72.913 84.83 72.913 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(54,59,56); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
            <path
              d="M 84.83 17.087 h -1.404 v 23.531 c 0 16.021 -12.987 29.008 -29.008 29.008 H 0.366 c 0.754 1.922 2.615 3.287 4.804 3.287 h 79.66 c 2.855 0 5.17 -2.315 5.17 -5.17 V 22.257 C 90 19.402 87.685 17.087 84.83 17.087 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(46,50,47); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
            <path
              d="M 18.972 35.272 H 7.931 c -1.173 0 -2.123 -0.951 -2.123 -2.123 v -5.945 c 0 -1.173 0.951 -2.123 2.123 -2.123 h 11.041 c 1.173 0 2.123 0.951 2.123 2.123 v 5.945 C 21.095 34.321 20.145 35.272 18.972 35.272 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(234,165,0); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />

            <path
              d="M 73.658 55.457 c -1.58 0 -2.974 0.734 -3.908 1.862 c -0.935 -1.128 -2.329 -1.862 -3.908 -1.862 c -2.814 0 -5.096 2.282 -5.096 5.096 c 0 2.814 2.282 5.096 5.096 5.096 c 1.58 0 2.974 -0.734 3.908 -1.862 c 0.935 1.128 2.329 1.862 3.908 1.862 c 2.814 0 5.096 -2.282 5.096 -5.096 C 78.754 57.738 76.472 55.457 73.658 55.457 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(84,92,86); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
            <path
              d="M 70.668 64.649 c 0.838 0.622 1.865 0.999 2.99 0.999 c 2.814 0 5.096 -2.282 5.096 -5.096 c 0 -1.064 -0.328 -2.05 -0.885 -2.867 C 75.889 60.401 73.454 62.762 70.668 64.649 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(73,79,74); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
          </g>
        </svg>
      </div>
    </div>
  `,
  styles: ``,
})
export class CreditCardComponentComponent {
  cardNumber = input.required<string>();
  cardHolderName = input.required<string>();
  cardExpiryYear = input.required<string>();
  cardExpiryMonth = input.required<string>();
  cardCVV = input.required<string>();
}
