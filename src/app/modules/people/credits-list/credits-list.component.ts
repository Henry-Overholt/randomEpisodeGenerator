import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';
import { PeopleService } from 'src/app/shared/services/people/people.service';

@Component({
  selector: 'randomly-credits-list',
  templateUrl: './credits-list.component.html',
  styleUrls: ['./credits-list.component.css'],
})
export class CreditsListComponent implements OnInit {
  @Input() typeOfCredits: string;
  @Input() idOfActor: string;
  @Input() borderColor: string;
  credits: any[];
  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    //gets a persons TV credits
    if (this.typeOfCredits === 'tv') {
      this.peopleService.getTvCredits(this.idOfActor).subscribe((res) => {
        this.credits = res.cast;
      });
    } else if (this.typeOfCredits === 'movie') {
      this.peopleService.getMovieCredits(this.idOfActor).subscribe((res) => {
        this.credits = res.cast;
        this.credits.forEach((obj) => {
          obj.name = obj.title;
        });
      });
    }
  }
  navigateToCollection(): void {}
  navigateToRandom(id: string): void {
    this.router.navigate([`/random/${id}`]);
  }
  navigateToDetails(id: string): void {
    if (this.typeOfCredits === 'tv') {
      this.router.navigate([`/show/${id}`]);
    } else {
      this.router.navigate([`/movie/${id}`]);
    }
  }
}
