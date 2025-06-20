import {Component, OnInit} from '@angular/core';
import {MovieService} from "../shared/movie.service";
import {Movie} from "../shared/movie.model";
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {

    this.movieService.getMovies()
      .subscribe(moviesArr => this.movies = moviesArr);



  }

  onDelete(movie: Movie) {
    this.movieService.deleteMovie(movie.id)
      .subscribe(_ => {

        console.log("delete-ok");
        //???? delete here???
      });

    this.movies = this.movies.filter(d => d.id !== movie.id);//== ===

  }
}
