import { Component, inject } from '@angular/core';
import { ButtonComponent, InputComponent } from '@campboard/ui-components';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ButtonComponent, InputComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  private fb = inject(FormBuilder);

  protected readonly registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(7)]],
  });

  public submitRegister() {
    const registerDetails = this.registerForm.value;
    console.log(registerDetails);
    this.registerForm.reset();
  }
}
