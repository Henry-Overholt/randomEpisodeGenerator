import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'randomEpisodeGenerator';
  nav: boolean = false;
  welcome: boolean = false;

  openNav(): void {
    this.nav = !this.nav;
  }
  handleWelcomeRoute() {
    this.welcome = true;
    setTimeout(() => {
      this.welcome = false;
      console.log('turned off welcome');
    }, 6000);
  }
}
