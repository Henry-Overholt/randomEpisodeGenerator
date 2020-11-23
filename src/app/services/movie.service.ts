import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiKey: string = environment.movieDB.apiKey;
  posterPath: string = 'https://image.tmdb.org/t/p/w154';
  searchResults: any[] = [];
  searchKeyword: string;
  movieToView: any;
  collections: any[] = [
    {
      title: 'Star Wars',
      id: 10,
      poster_path: '/r8Ph5MYXL04Qzu4QBbq2KjqwtkQ.jpg',
    },
    {
      title: 'Avengers Collection',
      id: 86311,
      poster_path: '/tqXiOD5rTyHgabO73Tpw9JDbd88.jpg',
    },
    {
      title: 'Harry Potter Collection',
      id: 1241,
      poster_path: '/eVPs2Y0LyvTLZn6AP5Z6O2rtiGB.jpg',
    },
    {
      title: 'The Fast and Furious Collection',
      id: 9485,
      poster_path: '/zQdytnqfsWKJlqazqfMBL2L7aql.jpg',
    },
    {
      title: 'Twilight',
      id: 33514,
      poster_path: '/aKAX2HO5V94JYeSIkOMFNlRI71E.jpg',
    },
  ];
  collectionCover: any;
  collectionToRandomize: any[];
  newCollection: any[] = [];
  constructor(private http: HttpClient) {}
  getNewCollection(): any[] {
    return this.newCollection;
  }
  addToCollection(movie: any): any[] {
    this.newCollection.unshift(movie);
    return this.newCollection;
  }
  deleteFromCollection(i: number): any[] {
    this.newCollection.splice(i, 1);
    return this.newCollection;
  }
  returnCollections(): any[] {
    return this.collections;
  }
  setCollection(response: any[]) {
    this.collectionToRandomize = response;
  }
  returnCollectionRandomize(): any {
    return this.collectionToRandomize;
  }
  setSearchResults(searchResults: any): void {
    this.searchResults = searchResults;
  }
  getSearchResults(): any[] {
    return this.searchResults;
  }
  setMovieToView(movie: any): void {
    this.movieToView = movie;
    console.log(this.movieToView);
  }
  getMovieToView(): any {
    return this.movieToView;
  }
  //get possible videos for movies
  getVideosForMovie(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}&language=en-US`
    );
  }
  //search collections with a query
  searchCollections(query: string): Observable<any> {
    this.searchKeyword = query;
    return this.http.get(
      `https://api.themoviedb.org/3/search/collection?api_key=${this.apiKey}&language=en-US&query=${query}&page=1`
    );
  }
  //search Movies with a query
  searchMovies(query: string): Observable<any> {
    this.searchKeyword = query;
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
    );
  }
  //get Movie by ID
  getMovie(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}&language=en-US`
    );
  }
  //get a collection by an ID
  getCollection(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/collection/${id}?api_key=${this.apiKey}&language=en-US`
    );
  }
  randomNewCollection(): void {
    this.collectionToRandomize = this.newCollection;
  }
}
