import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  id: any;
  constructor(
    private apiService: ApiService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRouter.params.subscribe((params) => {
      this.id = params.id;
      this.apiService.getTVShow(this.id).subscribe((res) => {
        this.show = res;
        this.getRandomEpisode();
      });
    });
    // console.log(this.id);

    this.photoPath = this.apiService.posterPath;
  }
  getRandomEpisode(): void {
    this.foundRandomEpisode = false;
    this.startRandom = true;
    let season = this.randomInt(this.show.number_of_seasons);
    let episode;
    this.apiService.getSeason(this.show.id, season).subscribe((res) => {
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
