import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { MovieService } from './../services/movie.service';
import { Shows } from './../interfaces/shows';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  shows: any[];
  collections: any[];
  result;
  posterPath: string;
  title: string = 'Popular Shows to Randomize';
  movies: boolean = false;
  placeholder: string = 'Search for New Show';
  constructor(
    private apiService: ApiService,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.shows = this.apiService.getPresetShows();
    this.posterPath = this.apiService.posterPath;
  }
  handleSearch(form: NgForm) {
    let search = form.value.search;
    if (search != '') {
      if (this.movies) {
        this.apiService.getMovieIds(form.value.search).subscribe((res) => {
          // this.shows = res.results;
          this.apiService.setSearchResults(res.results);
          this.router.navigate(['/search']);
        });
      } else {
      }
    }
    form.reset();
  }
  handleClick(i: number): void {
    this.apiService.setShow(i);
    this.router.navigate(['/random']);
  }
  toggleMovie(): void {
    this.movies = !this.movies;
    if (this.movies) {
      this.title = 'Popular Movie Collections to Randomize';
      this.placeholder = 'Search for Movies';
    } else {
      this.title = 'Popular Shows to Randomize';
      this.placeholder = 'Search for New Show';
    }
  }
}
