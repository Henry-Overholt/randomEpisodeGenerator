import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  availableChar: any[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  title: any[] = [
    { letter: 'R', characters: [], class: 'first' },
    { letter: 'A', characters: [], class: 'second' },
    { letter: 'N', characters: [], class: 'third' },
    { letter: 'D', characters: [], class: 'fourth' },
    { letter: 'O', characters: [], class: 'fifth' },
    { letter: 'M', characters: [], class: 'six' },
    { letter: 'L', characters: [], class: 'seven' },
    { letter: 'Y', characters: [], class: 'eight' },
  ];
  @Input() nav: boolean;
  @Output() openNavValue = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setRandomCharacters();
  }
  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
  routeToWelcome() {
    this.router.navigate(['/welcome']);
  }
  setRandomCharacters() {
    this.title.forEach((obj) => {
      if (obj.letter === '') {
        obj.letter = stringify(Math.floor(Math.random() * 10));
      }
      for (let i = 0; i < 10; i++) {
        obj.characters.push(Math.floor(Math.random() * 10));
      }
    });
  }
  getRandomCharacter(): string {
    return this.availableChar[
      Math.floor(Math.random() * this.availableChar.length)
    ];
  }
  openNav(): void {
    this.nav = !this.nav;
    this.openNavValue.emit();
  }
}
