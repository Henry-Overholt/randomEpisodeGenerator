import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RandomComponent } from './random/random.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ShowViewComponent } from './show-view/show-view.component';
import { RandomMovieComponent } from './random-movie/random-movie.component';
import { CollectionComponent } from './collection/collection.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'random', component: RandomComponent },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'view_show', component: ShowViewComponent },
  { path: 'view_movie', component: MovieDetailsComponent },
  { path: 'random-movie', component: RandomMovieComponent },
  { path: 'collections', component: CollectionComponent },
  { path: '**', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
