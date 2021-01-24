import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { MovieService } from '../../shared/services/movie.service';
import { Shows } from '../../shared/interfaces/shows';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PeopleService } from 'src/app/shared/services/people/people.service';

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
  popularItems: any[];
  popularShows: any[];
  popularMovies: any[];
  animation: boolean = false;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private movieService: MovieService,
    private peopleService: PeopleService
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
  handleSearch(search: string) {
    if (search != '') {
      if (!this.movies) {
        this.apiService.getMovieIds(search).subscribe((res) => {
          // this.shows = res.results;
          this.apiService.setSearchResults(res.results);
          this.router.navigate(['/search-results']);
        });
      } else {
        this.movieService.searchMovies(search).subscribe((res) => {
          this.movieService.setSearchResults(res.results);
          this.router.navigate(['/search-results']);
        });
      }
    }
  }

  handleClick(i): void {
    if (!this.movies) {
      this.router.navigate([`/random/${this.shows[i].id}`]);
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
      this.popularItems = this.popularMovies;
    } else {
      this.title = 'Popular Shows to Randomize';
      this.placeholder = 'Search for New Show';
      this.popularItems = this.popularShows;
    }
  }
  searchCollection(search): void {
    if (search != '') {
      this.movieService.setSearchKeyword(search);
      this.router.navigate(['/search-collections']);
    }
  }
  searchPeople(search): void {}
  seeDetails(i: number): void {
    if (this.movies) {
      this.router.navigate([`/movie/${this.popularItems[i].id}`]);
    } else {
      this.router.navigate([`/show/${this.popularItems[i].id}`]);
    }
  }
}
