import {Component, OnInit} from '@angular/core';
import {MovieService} from "../shared/movie.service";
import {Movie} from "../shared/movie.model";
import {Location} from "@angular/common";

@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent implements OnInit {

  constructor(
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit(): void { }

  onSave(title: string, director: string, year: string, price: string): void {
    console.log("onSave:", title, director, year, price);

    const movie = {
      title,
      director,
      year: Number(year),
      price: Number(price)
    };

    this.movieService.saveMovie(movie).subscribe({
      next: (savedMovie) => {
        console.log("Movie saved:", savedMovie);
        this.location.back();  // csak itt navigálj vissza, ha sikerült
      },
      error: (err) => {
        console.error("Save error:", err);
        // ide tehetsz hibakezelést (pl. üzenet a felhasználónak)
      }
    });
  }



}
