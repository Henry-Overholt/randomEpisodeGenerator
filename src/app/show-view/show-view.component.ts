import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Shows } from './../interfaces/shows';
import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  selector: 'app-show-view',
  templateUrl: './show-view.component.html',
  styleUrls: ['./show-view.component.css'],
})
export class ShowViewComponent implements OnInit {
  isShow: any;
  show: any;
  photoPath: string;
  randomEpisode: Shows;
  showDetails: any;
  color: string;
  showVideos: boolean = false;
  videos: any[];
  id: number;
  buttonTxt: string = 'GET RANDOM EPISODE';
  videoString: string = 'Loading Possible Videos ...';
  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.photoPath = this.apiService.posterPath;
    this.activatedRoute.params.subscribe((params) => {
      this.id = params.id;

      this.apiService.getTVShow(this.id).subscribe((res) => {
        this.show = res;
        console.log(res);
        this.setScore(this.show.vote_average);
        this.getVideos(this.show.id);
      });
    });
  }
  navigateToRandom(): void {
    this.randomEpisode = {
      title: this.show.name,
      id: this.show.id,
      poster_path: this.show.poster_path,
      seasons: this.show.number_of_seasons,
    };
    this.router.navigate([`/random/${this.show.id}`]);
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
  getVideos(id: number): void {
    this.apiService.getVideosForTV(id).subscribe((res) => {
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
  navigateToResults(): void {
    this.router.navigate(['/search']);
  }
}
