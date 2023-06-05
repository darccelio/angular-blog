import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';
import { Movie } from 'src/app/shared/model/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  bigCard: Movie;
  smallCards: Movie[];
  bigCardHorizontalPhotoCover: string;
  smallCardHorizontalPhotoCover: string[] = [];

  ngOnInit(): void {
    this.bigCard = {} as Movie;
    this.fetchData();
  }

  movies: Movie[];

  fetchData() {
    this.movies = dataFake;
    this.setBigCardData();
    this.setSmallCardsData();
  }

  setBigCardData() {
    this.bigCard.id = this.movies[0].id;
    this.bigCard.title = this.movies[0].title;
    this.bigCard.summary = this.movies[0].summary;

    if (this.movies[0]?.horizontalPhotoCover?.length) {
      this.bigCardHorizontalPhotoCover =
        this.movies[0]?.horizontalPhotoCover[0];
    }
  }

  setSmallCardsData() {
    this.smallCards = this.movies.slice(1, 5);

    this.smallCards.forEach((movie, i) => {
      if (movie?.horizontalPhotoCover?.length) {
        this.smallCardHorizontalPhotoCover.push(movie.horizontalPhotoCover[0]);
      }
    });
  }
}
