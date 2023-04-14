import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {
  @Input() id: string | undefined;
  @Input() value: string | undefined;
  @Input() title: string | undefined;

  @Output() colorSelected = new EventEmitter<string>();

  onColorSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const color = target.value;
    this.colorSelected.emit(color);
  }
}
