import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'input-component',
  imports: [CommonModule],
  templateUrl: './input-component.html',
  styleUrl: './input-component.scss',
})
export class InputComponent {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() value: string = '';
  @Input() error: string = '';
  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  }
}
