import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {MovieListService} from '../movie-list.service';

@Injectable({
  providedIn: 'root'
})
export class MovieListResolveService implements Resolve<any[]> {

  constructor(private movieService: MovieListService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> | Promise<any[]> | any[] {
    const id = route.paramMap.get('id');
    if (id) {
      return this.movieService.getMovieById(id);
    } else {
      return this.movieService.getMovie();
    }
  }
}
