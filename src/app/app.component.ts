import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'randomEpisodeGenerator';
  nav: boolean = false;

  openNav(): void {
    this.nav = !this.nav;
  }
}
