import {Component, OnInit} from '@angular/core';
import {MovieService} from "../shared/movie.service";
import {Movie} from "../shared/movie.model";
import {NgForOf} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  imports: [
    NgForOf
  ],
  standalone: true,

  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService, private router: Router) { }


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

    this.movieService.getMovies().subscribe(movies => this.movies = movies);

  }

  goToDetails(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/movies', id]);
    } else {
      console.warn('Movie id is undefined');
    }
  }

}
