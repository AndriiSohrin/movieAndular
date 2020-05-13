import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data/data.service';
import {DetailsMovieService} from '../../services/data/details-movie.service';
import {MovieListService} from '../../services/movie-list.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: any[];
  a;
  sort = [];


  constructor(private movieService: MovieListService,
              private activatedRoute: ActivatedRoute,
              private router: Router, private data: DataService,
              private movieDetails: DetailsMovieService) {
    this.activatedRoute.data.subscribe(value => this.movieList = value.list.results);
  }

  ngOnInit(): void {
    this.data.getState().subscribe(inputVal => {
      if (inputVal) {
        console.log(inputVal);
        for (let i = 1; i < 21; i++) {
          this.movieService.getMovieById(i).subscribe(value => value.results.map(el => this.sort.push(el)));
        }
        this.movieList = this.sort; // без цього чомусь не правцювало
        this.movieList = this.movieList.filter(el => el.title.toUpperCase().includes(inputVal.toUpperCase()));
      }
    });
  }

  showDetails(movie) {
    console.log(movie);
    this.router.navigate(['movie', movie.id]);
    this.movieDetails.setState(movie);
  }
}
