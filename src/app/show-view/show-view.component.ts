import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Router } from '@angular/router';
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
  videoString: string = 'Loading Possible Videos ...';
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.isShow = this.apiService.showToView;
    this.photoPath = this.apiService.posterPath;
    if (this.isShow != undefined) {
      this.apiService.getTVShow(this.isShow.id).subscribe((res) => {
        this.show = res;
        this.setScore(this.show.vote_average);
        this.getVideos(this.show.id);
      });
    } else {
      this.router.navigate(['/search']);
    }
  }
  navigateToRandom(): void {
    this.randomEpisode = {
      title: this.show.name,
      id: this.show.id,
      poster_path: this.show.poster_path,
      seasons: this.show.number_of_seasons,
    };
    this.apiService.setNewShow(this.randomEpisode);
    this.router.navigate(['/random']);
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
