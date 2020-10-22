import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
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
  result;
  posterPath: string;
  title: string = 'Popular Shows';
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.shows = this.apiService.getPresetShows();
    this.posterPath = this.apiService.posterPath;
  }
  handleSearch(form: NgForm) {
    let search = form.value.search;
    if (search != '') {
      this.apiService.getMovieIds(form.value.search).subscribe((res) => {
        console.log(res.results[0]);
        // this.shows = res.results;
        this.apiService.setSearchResults(res.results);
        this.router.navigate(['/search']);
      });
    }
    form.reset();
  }
  handleClick(i: number): void {
    this.apiService.setShow(i);
    this.router.navigate(['/random']);
  }
}
