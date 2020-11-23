import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
  collection: any;
  movies: any[];
  movie: any;
  fullMovies: any[];
  posterPath: string;
  collectionCover: any;
  shuffledMovies: any[] = [];
  buttonText: string = 'Randomize Collection';
  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.collection = this.movieService.returnCollectionRandomize();
    if (this.collection) {
      console.log(this.collection);
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
    } else {
      this.router.navigate(['/home']);
    }
  }
  loadRandomizeMovies(): void {
    this.shuffledMovies = [];
    for (let i = 0; i <= 5; i++) {
      let randomInt = Math.floor(Math.random() * this.movies.length);
      this.shuffledMovies.push(this.movies[randomInt]);
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
}
