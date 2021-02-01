import { Component, OnInit } from '@angular/core';
import { PeopleService } from './../../shared/services/people/people.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  id: any;
  person: any;
  tvShows: any[];
  movies: any[];
  showOrMovie: boolean = true;
  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRouter.params.subscribe((params) => {
      this.id = params.id;
      this.peopleService.getPeople(this.id).subscribe((res) => {
        console.log(res);
        this.person = res;
      });
    });
  }
  toggleCredits(): void {
    this.showOrMovie = !this.showOrMovie;
  }

  getAllInformation(): void {}
}
