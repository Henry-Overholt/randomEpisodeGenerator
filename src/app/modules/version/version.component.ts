import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css'],
})
export class VersionComponent implements OnInit {
  versions: any[] = [
    {
      title: 'V 2.1.1',
      release: 'December 2020',
      items: ['Fixed Bugs from 2.1', 'Added Developer Info to version history'],
    },
    {
      title: 'V 2.1',
      release: 'December 2020',
      items: [
        'Guest star carousel to random episode component ',
        'Added animations',
        'Fixed bugs that existed in V 2.0.',
        'Added Version history.',
      ],
    },
    {
      title: 'V 2.0',
      release: 'November 2020',
      items: [
        'Added Movie Collections to randomize.',
        'Added ability for user to create their own collection to randomized',
        'Added the ability for a user to create a list of their own choices and randomize it',
      ],
    },
    {
      title: 'V 1.0',
      release: 'October 2020',
      items: [
        'Site launched to random-episode.surge.sh',
        'Ability to randomize a show for a random episode.',
        "Ability to search for a show that isn't pinned to home page",
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
