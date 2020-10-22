import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  searchResults: any = [];
  search: string;
  posterPath: string;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.searchResults = this.apiService.searchResults;
    this.posterPath = this.apiService.posterPath;
    this.search = `Showing Results for "${this.apiService.search}"`;
    if (this.apiService.search === undefined) {
      this.search = 'No Results';
    }
    console.log(this.searchResults);
  }
  handleSearch(form: NgForm) {
    if (form.value.search != '') {
      this.search = `Showing Results for "${form.value.search}"`;
      this.apiService.getMovieIds(form.value.search).subscribe((res) => {
        this.searchResults = res.results;
        this.apiService.setSearchResults(res.results);
      });
    }

    form.reset();
  }
  navigateToDetails(i: number): void {
    this.apiService.setShowToView(this.searchResults[i]);
    this.router.navigate(['/view_show']);
  }
}
