import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { RandomComponent } from './modules/random/random.component';
import { SearchResultsComponent } from './modules/search-results/search-results.component';
import { ShowViewComponent } from './modules/show-view/show-view.component';
import { CollectionComponent } from './modules/collection/collection.component';
import { MovieDetailsComponent } from './modules/movie-details/movie-details.component';
import { SearchCollectionsComponent } from './modules/search-collections/search-collections.component';
import { CustomChoiceComponent } from './modules/custom-choice/custom-choice.component';
import { TitleAnimationComponent } from './modules/title-animation/title-animation.component';
import { VersionComponent } from './modules/version/version.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'random/:id', component: RandomComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'search-collections', component: SearchCollectionsComponent },
  { path: 'show/:id', component: ShowViewComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'collections', component: CollectionComponent },
  { path: 'custom', component: CustomChoiceComponent },
  { path: 'welcome', component: TitleAnimationComponent },
  { path: 'version', component: VersionComponent },
  { path: '**', component: TitleAnimationComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
