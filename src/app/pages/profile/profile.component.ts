import { Component, inject, Input } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './profile.component.html',
  styles: ``,
})
export class ProfileComponent {
  // profileForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  // });
  // userService = inject(UserService);
  @Input({ required: true }) user!: string;
  @Input({ required: true }) email!: string;
  // handleSubmit() {
  //   alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  //   if (this.profileForm.value.name && this.profileForm.value.email) {
  //     this.userService.saveUser({
  //       name: this.profileForm.value.name,
  //       email: this.profileForm.value.email,
  //     });
  //   }
  // }
}
