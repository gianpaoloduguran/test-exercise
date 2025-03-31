import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-address-form',
  imports: [ReactiveFormsModule, RouterLink],
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
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
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
    console.log('test', this.addressForm.value);
    // Format this
    alert(
      `Hello ${this.addressForm.value.name} your address is submitted.'+ "\n Addresses are: ${this.addressForm.value.fields[0].street}`
    );
  }
  get name() {
    return this.addressForm.get('name');
  }
}
