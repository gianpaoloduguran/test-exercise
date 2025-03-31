import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MaskCcNumberDirective } from '../../directives/mask-cc-number.directive';
import { DisableCutCopyPasteDirective } from '../../directives/disable-cut-copy-paste.directive';
import { formatCardNumber } from '../../utils/formatCardNumber';
import { CreditCardComponentComponent } from './credit-card-component/credit-card-component.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-credit-card-form',
  imports: [
    ReactiveFormsModule,
    MaskCcNumberDirective,
    DisableCutCopyPasteDirective,
    CreditCardComponentComponent,
    RouterLink,
    HeaderComponent,
  ],
  templateUrl: './credit-card-form.component.html',
  styles: `
    .example-month-picker .mat-calendar-period-button {
      pointer-events: none;
    }

    .example-month-picker .mat-calendar-arrow {
      display: none;
    }
  `,
})
export class CreditCardFormComponent {
  @ViewChild(MaskCcNumberDirective)
  maskCCNumberDirective!: MaskCcNumberDirective;
  creditCardForm = new FormGroup({
    name: new FormControl('', Validators.required),
    ccnumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{16}$'),
    ]),
    cvv: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{3}$'),
    ]),
    expiryMonth: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{2}$'),
    ]),
    expiryYear: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{4}$'),
    ]),
  });
  creditCardNumber = '';
  handleSubmit() {
    alert(`Credit Card Data submitted`);
  }
  get cardNumber() {
    var cc = this.creditCardForm.value.ccnumber;
    if (cc) {
      return formatCardNumber(cc);
    }
    return '####-####-####-####';
  }

  get cardExpiryMonth() {
    var month = this.creditCardForm.value.expiryMonth;
    if (month) {
      return month;
    }
    return '##';
  }

  get cardExpiryYear() {
    var year = this.creditCardForm.value.expiryYear;
    if (year) {
      return year;
    }
    return '####';
  }

  get cardHolderName() {
    return this.creditCardForm.value.name || 'Card Holder Name';
  }

  get cardCVV() {
    return this.creditCardForm.value.cvv || '###';
  }
}
