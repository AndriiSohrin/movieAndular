import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http: HttpClient) {
  }

  getMovie(): Observable<any[]> {
    return this.http.get<any[]>(`https://api.themoviedb.org/3/discover/movie?api_key=19eec3c1db6bc640e4777bf74bacacb0&page=1`);
  }

  getMovieById(id): Observable<any[]> {
    return this.http.get<any[]>(`https://api.themoviedb.org/3/discover/movie?api_key=19eec3c1db6bc640e4777bf74bacacb0&page=${id}`);
  }
}
