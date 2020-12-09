import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-custom-choice',
  templateUrl: './custom-choice.component.html',
  styleUrls: ['./custom-choice.component.css'],
})
export class CustomChoiceComponent implements OnInit {
  examples: string[] = ['See a Movie', 'Order Pizza'];
  randomInt: number = Math.floor(Math.random() * this.examples.length);
  placeholder: string = this.examples[this.randomInt];
  choices: string[] = [];
  shuffleChoices: string[] = [
    'Your random Choice is ...',
    'Pizze',
    'Pasta',
    'Potato',
  ];
  yourChoice: string = 'Your random Choice is ...';
  buttonTxt: string = 'RANDOMIZE';
  randomChoice: string = 'Your random choice is ...';
  constructor() {}

  ngOnInit(): void {
    // this.loadShuffleChoices();
  }
  addChoice(form: NgForm): void {
    this.choices.unshift(form.value.newChoice);
    console.log(this.choices);
    form.reset();
    this.loadShuffleChoices();
  }
  deleteChoice(i: number) {
    this.choices.splice(i, 1);
  }
  loadShuffleChoices(): void {
    this.shuffleChoices = [];
    for (let i = 0; i < 10; i++) {
      let random = Math.floor(Math.random() * this.choices.length);
      this.shuffleChoices.push(this.choices[random]);
    }
    console.log(this.shuffleChoices);
  }
  playRandom() {
    let n = 300;
    this.shuffleChoices.forEach((movie) => {
      setTimeout(() => {
        this.randomChoice = movie;
      }, n);
      n += 100;
    });
    this.loadShuffleChoices();
  }
}
