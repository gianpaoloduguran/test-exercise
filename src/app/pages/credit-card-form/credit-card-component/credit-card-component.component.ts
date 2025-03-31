import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-credit-card-component',
  imports: [],
  template: `
    <div class="credit-card-box mt-30">
      <div class="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill-opacity="1"
            d="M0,224L48,208C96,192,192,160,288,144C384,128,480,128,576,149.3C672,171,768,213,864,229.3C960,245,1056,235,1152,192C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <h3 class="logo">Blockbuster Bank Inc.</h3>

      <div class="front">
        <div class="number"></div>
        <div class="card-holder">
          <label class="card-number">{{ cardNumber() }}</label>
          <br />
          <label>{{ cardHolderName() }}</label>
        </div>
        <div class="card-expiration-date">
          <label>{{ cardExpiryMonth() }} / {{ cardExpiryYear() }}</label>
          <div></div>
        </div>
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
}
