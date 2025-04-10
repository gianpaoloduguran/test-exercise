import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-address-form',
  imports: [ReactiveFormsModule, RouterLink, HeaderComponent],
  templateUrl: './address-form.component.html',
  styles: ``,
})
export class AddressFormComponent {
  addressForm: FormGroup; // Main form group

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      name: ['', Validators.required], // Simple input field,
      fields: this.fb.array([], Validators.required), // Dynamic fields will be stored here
    });
  }

  // Getter to access the FormArray for dynamic fields
  get fields(): FormArray {
    return this.addressForm.get('fields') as FormArray;
  }

  /**
   * Adds a new field to the dynamic form.
   */
  addField() {
    const fieldGroup = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
    });
    this.fields.push(fieldGroup);
  }

  /**
   * Removes a field from the dynamic form at a specific index.
   * @param index Index of the field to be removed.
   */
  removeField(index: number) {
    this.fields.removeAt(index);
  }

  /**
   * Submits the form and logs its current value to the console.
   */
  submitForm() {
    alert(`Hello ${this.addressForm.value.name} your address is submitted.`);
  }
  get name() {
    return this.addressForm.get('name');
  }
}
