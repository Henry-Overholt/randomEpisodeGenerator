import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  links: string[] = [
    'https://www.themoviedb.org/documentation/api?language=en-US',
    'http://henryoverholt.surge.sh/',
  ];

  constructor() {}

  ngOnInit(): void {}
  goToLink(i: number): void {
    window.open(this.links[i], '_blank');
  }
}
