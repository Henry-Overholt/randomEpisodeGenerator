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
  returnCollections(): any[] {
    return this.collections;
  }
  setCollection(response: any[]) {
    this.collectionToRandomize = response;
  }
  returnCollectionRandomize(): any {
    return this.collectionToRandomize;
  }
  searchCollections(query: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/search/collection?api_key=${this.apiKey}&language=en-US&query=${query}&page=1`
    );
  }
  getCollection(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/collection/${id}?api_key=${this.apiKey}&language=en-US`
    );
  }
  randomNewCollection(): void {
    this.collections = this.newCollection;
  }
}
