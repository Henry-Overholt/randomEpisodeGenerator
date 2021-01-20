import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'randomly-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() leftChoice: string;
  @Input() rightChoice: string;
  @Input() isFirst: boolean = true;
  @Output() onSlide = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    this.isFirst = !this.isFirst;
    this.onSlide.emit();
  }
}
