import { Component, OnInit } from '@angular/core';
import {DetailsMovieService} from '../../services/data/details-movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
movie;
  constructor(private detailsMovie: DetailsMovieService) {
    this.detailsMovie.getState().subscribe(value => this.movie = value)
  }

  ngOnInit(): void {
  }



}
