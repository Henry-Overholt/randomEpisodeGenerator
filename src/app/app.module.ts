import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RandomComponent } from './modules/random/random.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule } from '@angular/forms';
import { SearchResultsComponent } from './modules/search-results/search-results.component';
import { ShowViewComponent } from './modules/show-view/show-view.component';
import { CustomChoiceComponent } from './modules/custom-choice/custom-choice.component';
import { MovieDetailsComponent } from './modules/movie-details/movie-details.component';
import { CollectionComponent } from './modules/collection/collection.component';
import { SearchCollectionsComponent } from './modules/search-collections/search-collections.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { TitleAnimationComponent } from './modules/title-animation/title-animation.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { PeopleCarouselComponent } from './shared/components/people-carousel/people-carousel.component';
import { VersionComponent } from './modules/version/version.component';
import { PosterContainerComponent } from './shared/components/poster-container/poster-container.component';

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
    TitleAnimationComponent,
    ButtonComponent,
    PeopleCarouselComponent,
    VersionComponent,
    PosterContainerComponent,
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
