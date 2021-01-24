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
import { StatsPageComponent } from './modules/stats-page/stats-page.component';
import { PeopleComponent } from './modules/people/people.component';
import { ImageContainerComponent } from './shared/components/image-container/image-container.component';
import { CreditsListComponent } from './modules/people/credits-list/credits-list.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { BorderCardComponent } from './shared/components/border-card/border-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { TrendingCarouselComponent } from './shared/components/trending-carousel/trending-carousel.component';

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
    StatsPageComponent,
    PeopleComponent,
    ImageContainerComponent,
    CreditsListComponent,
    SliderComponent,
    BorderCardComponent,
    SearchBarComponent,
    TrendingCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
