import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiKey: string = environment.movieDB.apiKey;
  constructor(private http: HttpClient) {}
}
