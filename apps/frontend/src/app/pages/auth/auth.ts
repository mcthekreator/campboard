import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, InputComponent } from '@campboard/ui-components';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, ButtonComponent, InputComponent],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {}
