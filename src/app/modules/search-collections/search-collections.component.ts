import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-search-collections',
  templateUrl: './search-collections.component.html',
  styleUrls: ['./search-collections.component.css'],
})
export class SearchCollectionsComponent implements OnInit {
  searchResults: any[];
  searchKeyword: string;
  posterPath: string;
  loading: boolean = true;
  resultsString: string = `Loading Results`;
  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.searchKeyword = this.movieService.getSearchKeyword();
    this.posterPath = this.movieService.posterPath;
    if (this.searchKeyword != undefined) {
      this.movieService
        .searchCollections(this.searchKeyword)
        .subscribe((res) => {
          this.loading = false;
          this.resultsString = `Showing Results for '${this.searchKeyword}'`;
          this.searchResults = res.results;
          console.log(this.searchResults);
        });
    } else {
      this.loading = false;
      this.resultsString = 'No Search Results';
    }
  }
  searchCollections(search): void {
    this.loading = true;
    this.searchKeyword = search;
    this.movieService.searchCollections(search).subscribe((res) => {
      this.resultsString = `Showing Results for '${this.searchKeyword}'`;
      this.loading = false;
      this.searchResults = res.results;
    });
  }
  navigateToDetails(i: number): void {
    console.log(this.searchResults[i]);
    console.log(this.searchResults[i].poster_path);
    this.movieService
      .getCollection(this.searchResults[i].id)
      .subscribe((res) => {
        this.movieService.setCollection(res);
        this.router.navigate(['/collections']);
      });
  }
}
