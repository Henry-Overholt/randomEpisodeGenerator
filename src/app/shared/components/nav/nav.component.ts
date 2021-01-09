import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

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
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url === '/welcome') {
          this.show = false;
        } else {
          this.show = true;
        }
      });
  }

  ngOnInit(): void {}
  openNav(): void {
    this.closeNav.emit();
  }
}
