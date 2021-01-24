import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MovieService } from '../../shared/services/movie.service';

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
  trendingShows: any[];
  trendingMovies: any[];
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
    this.movieService.getPopularMovie().subscribe((res) => {
      this.trendingMovies = res.results;
      console.log('Movies', res.results);
      if (this.movieOrShow && this.searchKeyword === undefined) {
        this.searchResults = this.trendingMovies;
        this.search = 'Trending Movies';
      }
    });
    this.apiService.getPopularTV().subscribe((res) => {
      this.trendingShows = res.results;
      console.log('Shows', res.results);
      if (!this.movieOrShow && this.searchKeyword === undefined) {
        this.searchResults = this.trendingShows;
        this.search = 'Trending Shows';
      }
    });
    if (this.searchKeyword != undefined) {
      this.search = `Showing Results for "${this.searchKeyword}"`;
    }
  }
  handleSearch(search: string) {
    if (search != '') {
      this.searchKeyword = search;
      if (!this.movieOrShow) {
        this.apiService.getMovieIds(search).subscribe((res) => {
          this.searchResults = res.results;
          this.apiService.setSearchResults(res.results);
        });
      } else {
        this.movieService.searchMovies(search).subscribe((res) => {
          this.searchResults = res.results;
          this.movieService.setSearchResults(res.results);
        });
      }
      this.search = `Showing Results for "${this.searchKeyword}"`;
    }
  }
  navigateToDetails(i: number): void {
    if (!this.movieOrShow) {
      this.router.navigate([`/show/${this.searchResults[i].id}`]);
    } else {
      this.router.navigate([`/movie/${this.searchResults[i].id}`]);
    }
  }
  toggleMovieShow(): void {
    this.movieOrShow = this.apiService.setMovieOrShow();
    if (this.movieOrShow) {
      this.placeholder = 'Search for Movies';
      this.searchResults = this.trendingMovies;
      this.search = 'Trending Movies';
    } else {
      this.placeholder = 'Search for New Show';
      this.searchResults = this.trendingShows;
      this.search = 'Trending Shows';
    }
  }
}
