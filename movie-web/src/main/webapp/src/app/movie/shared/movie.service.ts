import {Injectable} from '@angular/core';

import {HttpClient} from "@angular/common/http";

import {Movie} from "./movie.model";

import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Client} from '../../clients/shared/client.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesUrl = 'http://localhost:8080/api/movies';

  constructor(private httpClient: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.httpClient
      .get<Array<Movie>>(this.moviesUrl);
  }

  getMovie(id: number): Observable<Movie | undefined> {
    return this.getMovies()
      .pipe(
        map(movies => movies.find(movies => movies.id === id))
      );
  }

  saveMovie(movie: { year: number; director: string; price: number; title: string }): Observable<Movie> {
    return this.httpClient
      .post<Movie>(this.moviesUrl, movie);
  }

  deleteMovie(id: number | undefined): Observable<any> {
    const url = `${this.moviesUrl}/${id}`;
    return this.httpClient
      .delete(url);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    const url = `${this.moviesUrl}/${movie.id}`;
    return this.httpClient
      .put<Movie>(url, movie);
  }


}
