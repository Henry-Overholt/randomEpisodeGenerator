import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'randomly-title-container',
  templateUrl: './title-container.component.html',
  styleUrls: ['./title-container.component.css'],
})
export class TitleContainerComponent implements OnInit {
  @Input() titles: any[];
  @Input() movieOrShow: boolean;
  @Input() borderColor: string;
  @Output() titleClicked = new EventEmitter<number>();
  posterPath: string = 'https://image.tmdb.org/t/p/w154';
  constructor(
    private apiService: ApiService,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.setDefaultValues();
  }
  setDefaultValues(): void {
    if (this.movieOrShow === undefined) {
      this.movieOrShow = this.apiService.getMovieOrShow();
    }
    if (!this.titles && !this.movieOrShow) {
      this.apiService.getPopularTV().subscribe((res) => {
        this.titles = res.results;
      });
    } else if (!this.titles && this.movieOrShow) {
      this.movieService.getPopularMovie().subscribe((res) => {
        this.titles = res.results;
      });
    }
  }
  handleClick(i: number): void {
    this.titleClicked.emit(i);
  }
}
