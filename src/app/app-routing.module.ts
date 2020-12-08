import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RandomComponent } from './random/random.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ShowViewComponent } from './show-view/show-view.component';
import { CollectionComponent } from './collection/collection.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchCollectionsComponent } from './search-collections/search-collections.component';
import { CustomChoiceComponent } from './custom-choice/custom-choice.component';
import { TitleAnimationComponent } from './title-animation/title-animation.component';

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
