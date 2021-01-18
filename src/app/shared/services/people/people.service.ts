import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  apiKey: string = environment.movieDB.apiKey;
  posterPath: string = 'https://image.tmdb.org/t/p/w154';
  constructor(private http: HttpClient) {}
  getPeople(id: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${this.apiKey}&language=en-US`
    );
  }
}
