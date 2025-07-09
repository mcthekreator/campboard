import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'button-component',
  imports: [CommonModule],
  templateUrl: './button-component.html',
  styleUrl: './button-component.scss',
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() color: 'primary' | 'accent' | 'warn' | 'default' = 'default';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' = 'button';
}
