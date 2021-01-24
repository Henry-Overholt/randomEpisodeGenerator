import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'randomly-custom-collection',
  templateUrl: './custom-collection-container.component.html',
  styleUrls: ['./custom-collection-container.component.css'],
})
export class CustomCollectionContainerComponent implements OnInit {
  @Output() closeWindow = new EventEmitter<void>();
  collection: any[];
  buttonTxt: string = 'RANDOMIZE LIST';
  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.collection = this.movieService.getNewCollection();
  }
  removeFromCollection(i: number): void {
    this.collection = this.movieService.deleteFromCollection(i);
  }
  randomizeMovie() {
    this.movieService.randomNewCollection();
    this.router.navigate(['/collections']);
  }
  navigateToDetails(id: string) {
    this.router.navigate([`/movie/${id}`]);
    this.closeCollectionView();
  }
  navigateToSearch() {
    this.router.navigate(['/search-results']);
  }
  closeCollectionView() {
    this.closeWindow.emit();
  }
}
