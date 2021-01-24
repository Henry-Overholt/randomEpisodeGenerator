import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { MovieService } from '../../services/movie.service';
import { PeopleService } from './../../services/people/people.service';

@Component({
  selector: 'randomly-trending-carousel',
  templateUrl: './trending-carousel.component.html',
  styleUrls: ['./trending-carousel.component.css'],
})
export class TrendingCarouselComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Input() color: string;
  posters: any[] = [];
  constructor(
    private movieService: MovieService,
    private tvService: ApiService,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.type === 'show') {
      this.tvService.getPopularTV().subscribe((res) => {
        this.posters = res.results;
      });
    } else if (this.type === 'movie') {
      this.movieService.getPopularMovie().subscribe((res) => {
        console.log(res.results);
        this.posters = res.results;
      });
    } else {
      this.peopleService.getPopular().subscribe((res) => {
        console.log(res.results);
        this.posters = res.results;
        this.posters.forEach((poster) => {
          poster.poster_path = poster.profile_path;
        });
      });
    }
  }
  getStyle(): any {
    return { 'border-color': this.color, color: this.color };
  }
  seeDetails(id: string): void {
    if (this.type === 'show') {
      this.router.navigate([`/show/${id}`]);
    } else if (this.type === 'movie') {
      this.router.navigate([`/movie/${id}`]);
    } else {
      this.router.navigate([`/people/${id}`]);
    }
  }
}
