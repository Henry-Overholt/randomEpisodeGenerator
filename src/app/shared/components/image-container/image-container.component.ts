import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'randomly-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css'],
})
export class ImageContainerComponent implements OnInit {
  posterPath: string = 'https://image.tmdb.org/t/p/w154';
  @Input() className: string;
  @Input() url: string;
  @Input() name: string;
  @Input() borderColor: string;
  constructor() {}

  ngOnInit(): void {}
}
