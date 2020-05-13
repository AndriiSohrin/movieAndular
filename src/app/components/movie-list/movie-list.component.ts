import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data/data.service';
import {DetailsMovieService} from '../../services/data/details-movie.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: any[];
  a;
  currentRate = 7;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private data: DataService, private movieDetails: DetailsMovieService) {
    this.data.getState().subscribe(input => {
      if (input) {
        console.log(this.movieList);
        this.movieList = this.movieList.filter(el => el.title.toUpperCase().includes(input.toUpperCase()));
        console.log(this.movieList);
      } else {
        this.activatedRoute.data.subscribe(value => this.movieList = value.list.results);
      }
    });


  }


  ngOnInit(): void {
  }

  showDetails(movie) {
    console.log(movie);
    this.router.navigate(['movie', movie.id]);
    this.movieDetails.setState(movie);
  }
}
