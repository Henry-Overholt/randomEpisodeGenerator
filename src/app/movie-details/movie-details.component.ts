import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
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
  id: any;
  buttonTxt: string = 'RANDOMIZE MOVIES';
  constructor(
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.posterPath = this.movieService.posterPath;
    this.activatedRoute.params.subscribe((param) => {
      this.id = param.id;
      this.movieService.getMovie(this.id).subscribe((res) => {
        this.movie = res;
        this.getVideos(this.movie.id);
        this.setScore(this.movie.vote_average);
      });
      this.collection = this.movieService.getNewCollection();
      this.searchCollection();
    });
    // this.movieToView = this.movieService.getMovieToView();
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
      console.log(res.results);
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
        return movie.id === this.id;
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
