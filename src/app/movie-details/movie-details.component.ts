import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieToView: any;
  movie: any;
  posterPath: string;
  color: string;
  showVideos: boolean = false;
  isAdded: boolean;
  buttonText: string = 'Add to List to Randomize';
  videos: any[];
  collection: any[] = [];
  indexInCollection: number;
  videoString: string = 'Loading Possible Videos ...';
  seeCollection: boolean = false;
  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movieToView = this.movieService.getMovieToView();
    this.posterPath = this.movieService.posterPath;
    if (this.movieToView != undefined) {
      this.movieService.getMovie(this.movieToView.id).subscribe((res) => {
        this.movie = res;
        this.getVideos(this.movie.id);
        this.setScore(this.movie.vote_average);
      });
      this.collection = this.movieService.getNewCollection();
      this.searchCollection();
    } else {
      this.router.navigate(['/home']);
    }
  }
  getVideos(id: number): void {
    this.movieService.getVideosForMovie(id).subscribe((res) => {
      this.showVideos = true;
      this.videos = res.results;
      if (this.videos.length === 0) {
        this.videoString = 'No available videos';
      } else if (this.videos.length === 1) {
        this.videoString = 'There is 1 possible video to check out';
      } else {
        this.videoString = `There are ${this.videos.length} possible videos to check out`;
      }
    });
  }
  setScore(score: number): void {
    let color: string = 'green';
    let precentage = Math.floor((score / 10) * 60);
    if (precentage >= 45) {
      color = 'green';
    } else if (precentage <= 30) {
      color = 'red';
    } else {
      color = 'yellow';
    }
    let secondPrecentage = 60 - precentage;
    this.color = `linear-gradient(to top,  ${color} ${precentage}px, rgb(179, 179, 179) ${
      60 - secondPrecentage
    }px)`;
  }
  setButtonText(): void {
    if (this.isAdded) {
      this.buttonText = 'See Your Collection';
    } else {
      this.buttonText = 'Add to List to Randomize';
    }
  }
  searchCollection(): void {
    if (this.collection.length === 0) {
      this.isAdded = false;
    } else {
      let index = this.collection.findIndex((movie) => {
        return movie.id === this.movieToView.id;
      });
      if (index < 0) {
        this.isAdded = false;
      } else {
        this.isAdded = true;
      }
    }

    this.setButtonText();
  }
  addToCollection() {
    if (!this.isAdded) {
      this.collection = this.movieService.addToCollection(this.movie);
      this.isAdded = true;
    }
    this.seeCollection = true;
    this.setButtonText();
  }
  closeCollectionView(): void {
    this.seeCollection = false;
  }
  removeFromCollection(i: number): void {
    this.collection = this.movieService.deleteFromCollection(i);
  }
  resetMovieToView(i: number): void {
    this.movieService.setMovieToView(this.collection[i]);
    this.ngOnInit();
    this.seeCollection = false;
  }
  randomizeMovie(): void {
    this.movieService.randomNewCollection();
    this.router.navigate(['/collections']);
  }
  navigateToSearch(): void {
    this.router.navigate(['/search-results']);
  }
}
