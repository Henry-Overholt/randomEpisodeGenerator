import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RandomComponent } from './random/random.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ShowViewComponent } from './show-view/show-view.component';
import { CustomChoiceComponent } from './custom-choice/custom-choice.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CollectionComponent } from './collection/collection.component';
import { SearchCollectionsComponent } from './search-collections/search-collections.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RandomComponent,
    SearchResultsComponent,
    ShowViewComponent,

    CustomChoiceComponent,
    MovieDetailsComponent,
    CollectionComponent,
    SearchCollectionsComponent,
    NavComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
