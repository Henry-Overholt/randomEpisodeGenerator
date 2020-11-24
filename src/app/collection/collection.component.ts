import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  collection: any;
  seeFilters: boolean = false;
  movies: any[];
  movie: any;
  total: number;
  posterPath: string;
  collectionCover: any;
  completeCollection: any[];
  shuffledMovies: any[] = [];
  randomInt: number;
  buttonText: string = 'Randomize Collection';
  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.collection = this.movieService.returnCollectionRandomize();
    if (this.collection) {
      this.posterPath = this.movieService.posterPath;
      if (this.collection.parts) {
        this.movies = this.collection.parts;
        this.movie = {
          title: this.collection.name,
          poster_path: this.collection.poster_path,
          overview: this.collection.overview,
        };
      } else {
        this.movies = this.collection;

        this.movie = this.collection[0];
      }

      this.loadRandomizeMovies();

      this.movies.forEach((movie) => (movie.isChecked = true));
      this.getNumberOfMovies();
    } else {
      this.router.navigate(['/home']);
    }
  }
  loadRandomizeMovies(): void {
    this.shuffledMovies = [];
    for (let i = 0; i <= 5; i++) {
      this.randomInt = Math.floor(Math.random() * this.movies.length);
      while (this.movies[this.randomInt].isChecked === false) {
        this.randomInt = Math.floor(Math.random() * this.movies.length);
      }
      this.shuffledMovies.push(this.movies[this.randomInt]);
    }
  }
  randomizeMovies(): void {
    let n = 100;
    this.shuffledMovies.forEach((movie) => {
      setTimeout(() => {
        this.movie = movie;
      }, n);
      n += 100;
    });
    this.loadRandomizeMovies();
    this.buttonText = 'Randomize Again';
  }
  toggleFilters(): void {
    this.seeFilters = !this.seeFilters;
  }
  getNumberOfMovies(): void {
    this.total = 0;
    this.movies.forEach((obj) => {
      if (obj.isChecked === true) {
        this.total++;
      }
    });
  }
  applyFilters(): void {
    this.loadRandomizeMovies();
    this.toggleFilters();
  }
  checkMovie(i: number): void {
    this.movies[i].isChecked = !this.movies[i].isChecked;
    this.getNumberOfMovies();
  }
}
