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

  shows: Shows[] = [
    {
      title: 'Seinfeld',
      id: 1400,
      img: '/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg',
      seasons: 9,
    },
    {
      title: 'The Simpsons',
      id: 456,
      img: '/qcr9bBY6MVeLzriKCmJOv1562uY.jpg',
      seasons: 31,
    },
    {
      title: 'The Office',
      id: 2316,
      img: '/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg',
      seasons: 9,
    },
    {
      title: 'Parks and Rec',
      id: 8592,
      img: '/zyJpE27k5rjjwhwvxSeHenxF6GB.jpg',
      seasons: 7,
    },

    {
      title: '30 Rock',
      id: 4608,
      img: '/k3RbNzPEPW0cmkfkn1xVCTk3Qde.jpg',
      seasons: 7,
    },
    {
      title: 'Friends',
      id: 1668,
      img: '/f496cm9enuEsZkSPzCwnTESEK5s.jpg',
      seasons: 10,
    },

    {
      title: 'The West Wing',
      id: 688,
      img: '/yz1qWFZ8kjgQjqB9NX5kWMetX4w.jpg',
      seasons: 7,
    },
    {
      title: 'Scrubs',
      id: 4556,
      img: '/jkucCAwYhZbWG0PYdb6QNeWoiPU.jpg',
      seasons: 9,
    },
    {
      title: 'Psych',
      id: 1447,
      img: '/fDI15gTVbtW5Sbv5QenqecRxWKJ.jpg',
      seasons: 8,
    },
  ];
  showToRandomize: Shows = this.shows[0];

  constructor(private http: HttpClient) {}
  getPresetShows(): Shows[] {
    return this.shows;
  }
  setShow(i: number) {
    this.showToRandomize = this.shows[i];
  }
  getMovieIds(query: string): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${this.apiKey}&page=1&query=${query}&include_adult=false`
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
}
// https://api.themoviedb.org/3/search/tv?api_key=b8e792c7e154e29a6973b79ddaff613e&language=en-US&page=1&query=office&include_adult=false
