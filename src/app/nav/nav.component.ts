import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Output() closeNav = new EventEmitter<void>();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  openNav(): void {
    this.closeNav.emit();
  }
}
