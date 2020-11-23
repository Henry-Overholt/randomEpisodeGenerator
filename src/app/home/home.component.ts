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
  title: string;
  movies: boolean;
  placeholder: string;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movies = this.apiService.getMovieOrShow();
    if (this.movies) {
      this.title = 'Popular Movie Collections to Randomize';
      this.placeholder = 'Search for Movies';
    } else {
      this.title = 'Popular Shows to Randomize';
      this.placeholder = 'Search for New Show';
    }
    this.posterPath = this.apiService.posterPath;
    this.shows = this.apiService.getPresetShows();
    this.collections = this.movieService.returnCollections();
  }
  handleSearch(form: NgForm) {
    let search = form.value.search;
    if (search != '') {
      if (!this.movies) {
        this.apiService.getMovieIds(form.value.search).subscribe((res) => {
          // this.shows = res.results;
          this.apiService.setSearchResults(res.results);
          this.router.navigate(['/search-results']);
        });
      } else {
        this.movieService.searchMovies(search).subscribe((res) => {
          console.log(res);
          this.movieService.setSearchResults(res.results);
          this.router.navigate(['/search-results']);
        });
      }
    }
    form.reset();
  }
  handleClick(i: number): void {
    if (!this.movies) {
      this.apiService.setShow(i);
      this.router.navigate(['/random']);
    } else {
      this.movieService
        .getCollection(this.collections[i].id)
        .subscribe((res) => {
          this.movieService.setCollection(res);
          this.router.navigate(['/collections']);
        });
    }
  }
  toggleToMovie(): void {
    this.movies = this.apiService.setMovieOrShow();
    if (this.movies) {
      this.title = 'Popular Movie Collections to Randomize';
      this.placeholder = 'Search for Movies';
    } else {
      this.title = 'Popular Shows to Randomize';
      this.placeholder = 'Search for New Show';
    }
  }
}
