import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule, RouterLink, HeaderComponent],
  templateUrl: './user-form.component.html',
  styles: ``,
})
export class UserFormComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
    ]),
  });

  handleSubmit() {
    alert(
      `Name: ${this.profileForm.value.name} \n Email: ${this.profileForm.value.email}`
    );
  }
  get name() {
    return this.profileForm.get('name');
  }
  get email() {
    return this.profileForm.get('email');
  }
}
