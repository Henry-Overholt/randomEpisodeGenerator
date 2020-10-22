import { Component, OnInit } from '@angular/core';
import { ApiService } from './../services/api.service';
import { Router } from '@angular/router';
import { Shows } from './../interfaces/shows';

@Component({
  selector: 'app-show-view',
  templateUrl: './show-view.component.html',
  styleUrls: ['./show-view.component.css'],
})
export class ShowViewComponent implements OnInit {
  show: any;
  photoPath: string;
  randomEpisode: Shows;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.show = this.apiService.showToView;
    this.photoPath = this.apiService.posterPath;
    this.apiService.getTVShow(this.show.id).subscribe((res) => {
      this.randomEpisode = {
        title: res.name,
        id: res.id,
        poster_path: res.poster_path,
        seasons: res.number_of_seasons,
      };
      console.log(this.randomEpisode);
    });
  }
  navigateToRandom(): void {
    this.router.navigate(['/random']);
  }
  navigateToResults(): void {
    this.router.navigate(['/search']);
  }
}
