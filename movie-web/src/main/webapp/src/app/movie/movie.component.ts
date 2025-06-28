import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MovieListComponent} from './movie-list/movie-list.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movie.component.html',
  imports: [
    MovieListComponent
  ],
  standalone: true,
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  addNewMovie() {
    console.log("addNewMovie called");
    this.router.navigate(['/movie-new']);
  }
}
