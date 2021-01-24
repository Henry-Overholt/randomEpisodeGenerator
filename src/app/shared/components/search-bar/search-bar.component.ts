import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'randomly-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Input() placeholder: string;
  @Input() buttonTxt: string;
  @Output() search = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  handleSearch(form: NgForm) {
    this.search.emit(form.value.search);
    form.reset();
  }
}
