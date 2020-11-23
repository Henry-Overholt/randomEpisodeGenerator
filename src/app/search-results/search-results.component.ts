import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  searchResults: any = [];
  placeholder: string;
  search: string;
  searchKeyword: string;
  posterPath: string;
  movieOrShow: boolean;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movieOrShow = this.apiService.getMovieOrShow();
    this.posterPath = this.apiService.posterPath;
    if (!this.movieOrShow) {
      this.placeholder = 'Search for New Show';
      this.searchKeyword = this.apiService.search;
      this.searchResults = this.apiService.searchResults;
    } else {
      this.placeholder = 'Search for Movies';
      this.searchKeyword = this.movieService.searchKeyword;
      this.searchResults = this.movieService.getSearchResults();
    }
    if (this.searchKeyword === undefined) {
      this.search = 'No Results';
    } else {
      this.search = `Showing Results for "${this.searchKeyword}"`;
    }
  }
  handleSearch(form: NgForm) {
    if (form.value.search != '') {
      this.searchKeyword = form.value.search;
      if (!this.movieOrShow) {
        this.apiService.getMovieIds(form.value.search).subscribe((res) => {
          this.searchResults = res.results;
          this.apiService.setSearchResults(res.results);
        });
      } else {
        this.movieService.searchMovies(form.value.search).subscribe((res) => {
          this.searchResults = res.results;
          this.movieService.setSearchResults(res.results);
        });
      }
      this.search = `Showing Results for "${this.searchKeyword}"`;
    }
    form.reset();
  }
  navigateToDetails(i: number): void {
    if (!this.movieOrShow) {
      this.apiService.setShowToView(this.searchResults[i]);
      this.router.navigate(['/view_show']);
    } else {
      this.movieService.setMovieToView(this.searchResults[i]);
      this.router.navigate(['/view_movie']);
    }
  }
  toggleMovieShow(): void {
    this.movieOrShow = this.apiService.setMovieOrShow();
    if (this.movieOrShow) {
      this.placeholder = 'Search for Movies';
    } else {
      this.placeholder = 'Search for New Show';
    }
    this.search = 'No Results Showing';
    this.searchResults = [];
  }
}
