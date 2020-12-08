import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @Output() closeNav = new EventEmitter<void>();
  show: boolean = true;
  route: string;
  constructor(private router: Router, private activedRouter: ActivatedRoute) {
    this.route = this.router.url;
  }

  ngOnInit(): void {
    console.log(this.route);
    // setTimeout(() => {
    //   document.getElementById('body').style.animationDelay = '1.5s';
    // }, 6000);
  }
  openNav(): void {
    this.closeNav.emit();
  }
}
