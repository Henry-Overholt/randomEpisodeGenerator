import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonTxt: string;
  @Output() buttonClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  handleClick(): void {
    this.buttonClicked.emit();
  }
}
