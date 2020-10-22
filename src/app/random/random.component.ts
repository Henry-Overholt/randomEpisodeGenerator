import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'],
})
export class RandomComponent implements OnInit {
  show: any;
  randomEpisode: any;
  startRandom: boolean = false;
  foundRandomEpisode: boolean = false;
  photoPath: string;
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.show = this.apiService.showToRandomize;
    this.photoPath = this.apiService.posterPath;
    this.getRandomEpisode();
  }
  getRandomEpisode(): void {
    this.foundRandomEpisode = false;
    this.startRandom = true;
    let season = this.randomInt(this.show.seasons);
    let episode;
    this.apiService.getSeason(this.show.id, season).subscribe((res) => {
      // console.log(res.episodes.length);
      episode = this.randomInt(res.episodes.length);
      this.apiService
        .getRandomEpisode(this.show.id, season, episode)
        .subscribe((res) => {
          this.randomEpisode = res;
          this.foundRandomEpisode = true;
        });
    });
  }
  randomInt(n: number): number {
    return Math.floor(Math.random() * n + 1);
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
