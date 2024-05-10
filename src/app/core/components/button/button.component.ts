import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  /**
   *
   */
  constructor() {
    this.clickButton = new EventEmitter()
  }
  @Input({required: false}) textButton! : string;
  @Input({required: false}) type! : string;
  @Output() clickButton! : EventEmitter<void>;

  OnClick(){
    this.clickButton.emit()
  }
}
