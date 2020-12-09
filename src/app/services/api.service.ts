import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Shows } from './../interfaces/shows';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiKey: string = environment.movieDB.apiKey;
  posterPath: string = 'https://image.tmdb.org/t/p/w154';
  searchResults: any[] = [];
  shows: Shows[] = [
    {
      title: 'Seinfeld',
      id: 1400,
      poster_path: '/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg',
      seasons: 9,
    },
    {
      title: 'The Simpsons',
      id: 456,
      poster_path: '/qcr9bBY6MVeLzriKCmJOv1562uY.jpg',
      seasons: 31,
    },
    {
      title: 'The Office',
      id: 2316,
      poster_path: '/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg',
      seasons: 9,
    },
    {
      title: 'Parks and Recreation',
      id: 8592,
      poster_path: '/zyJpE27k5rjjwhwvxSeHenxF6GB.jpg',
      seasons: 7,
    },

    {
      title: '30 Rock',
      id: 4608,
      poster_path: '/k3RbNzPEPW0cmkfkn1xVCTk3Qde.jpg',
      seasons: 7,
    },
    {
      title: 'Friends',
      id: 1668,
      poster_path: '/f496cm9enuEsZkSPzCwnTESEK5s.jpg',
      seasons: 10,
    },
    {
      title: "Schitt's Creek",
      id: 61662,
      poster_path: '/iRfSzrPS5VYWQv7KVSEg2BZZL6C.jpg',
      seasons: 6,
    },
    {
      title: 'The West Wing',
      id: 688,
      poster_path: '/yz1qWFZ8kjgQjqB9NX5kWMetX4w.jpg',
      seasons: 7,
    },
    {
      title: 'Scrubs',
      id: 4556,
      poster_path: '/jkucCAwYhZbWG0PYdb6QNeWoiPU.jpg',
      seasons: 9,
    },
    {
      title: 'Psych',
      id: 1447,
      poster_path: '/fDI15gTVbtW5Sbv5QenqecRxWKJ.jpg',
      seasons: 8,
    },
  ];
  search: string;
  movieOrShow: boolean = false;

  constructor(private http: HttpClient) {}
  setMovieOrShow(): boolean {
    this.movieOrShow = !this.movieOrShow;
    return this.movieOrShow;
  }
  getMovieOrShow(): boolean {
    return this.movieOrShow;
  }
  getPresetShows(): Shows[] {
    return this.shows;
  }
  getMovieIds(query: string): Observable<any> {
    this.search = query;
    return this.http.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&page=1&query=${query}&include_adult=false`
    );
  }
  getTVShow(id: number): Observable<any> {
    return this.http.get(
      `https:api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}&language=en-US`
    );
  }
  getSeason(id: number, season: number): Observable<any> {
    return this.http.get(
      `https:api.themoviedb.org/3/tv/${id}/season/${season}?api_key=${this.apiKey}&language=en-US`
    );
  }
  getRandomEpisode(
    id: number,
    season: number,
    episode: number
  ): Observable<any> {
    return this.http.get(
      `https:api.themoviedb.org/3/tv/${id}/season/${season}/episode/${episode}?api_key=${this.apiKey}&language=en-US`
    );
  }
  getVideosForTV(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${this.apiKey}&language=en-US`
    );
  }
  getPopularTV(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&page=1`
    );
  }
  getPeople(id: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${this.apiKey}&language=en-US`
    );
  }
  setSearchResults(results) {
    this.searchResults = results;
  }
}
