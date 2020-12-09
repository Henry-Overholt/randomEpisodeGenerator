import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'title-animation',
  templateUrl: './title-animation.component.html',
  styleUrls: ['./title-animation.component.css'],
})
export class TitleAnimationComponent implements OnInit {
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
    { letter: '', characters: [], class: 'first' },
    { letter: '', characters: [], class: 'second' },
    { letter: 'R', characters: [], class: 'third' },
    { letter: 'A', characters: [], class: 'fourth' },
    { letter: 'N', characters: [], class: 'fifth' },
    { letter: 'D', characters: [], class: 'six' },
    { letter: 'O', characters: [], class: 'seven' },
    { letter: 'M', characters: [], class: 'eight' },
    { letter: 'L', characters: [], class: 'nine' },
    { letter: 'Y', characters: [], class: 'ten' },
    { letter: '', characters: [], class: 'eleven' },
    { letter: '', characters: [], class: 'twelve' },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setRandomCharacters();
    console.log(this.title);
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 6000);
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
}
