import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsMovieService {

  state = new BehaviorSubject('');

  constructor() {
  }

  getState() {
    return this.state;
  }

  setState(state) {
    return this.state.next(state);
  }
}
