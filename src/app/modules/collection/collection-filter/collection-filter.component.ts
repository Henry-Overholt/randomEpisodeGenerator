import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'randomly-collection-filter',
  templateUrl: './collection-filter.component.html',
  styleUrls: ['./collection-filter.component.css'],
})
export class CollectionFilterComponent implements OnInit {
  @Input() movies: any[];
  @Output() closeClicked: EventEmitter<void> = new EventEmitter<void>();
  @Output() updateFilters: EventEmitter<any[]> = new EventEmitter<any[]>();
  applyButton = true;
  resetButton = true;
  constructor() {}

  ngOnInit(): void {}

  closeFilters(): void {
    this.closeClicked.emit();
  }

  applyFilters(): void {
    this.updateFilters.emit(this.movies);
  }

  resetFilters(): void {
    this.movies.forEach((obj) => (obj.isChecked = true));
  }

  checkMovie(i: number): void {
    this.movies[i].isChecked = !this.movies[i].isChecked;
  }
}
