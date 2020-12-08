import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() nav: boolean;
  @Output() openNavValue = new EventEmitter<void>();
  @Output() routingToWelcome = new EventEmitter<void>();
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateToHome(): void {
    this.router.navigate(['/home']);
  }
  routeToWelcome() {
    this.router.navigate(['/welcome']);
    this.routingToWelcome.emit();
  }
  openNav(): void {
    this.nav = !this.nav;
    this.openNavValue.emit();
  }
}
