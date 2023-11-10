import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  title: string = 'Film listesi';
  popularMovies: Movie[];
  movies: Movie[];
  MovieRepository: MovieRepository;
  filterText: string = '';

  constructor() {
    this.MovieRepository = new MovieRepository();
    this.movies = this.MovieRepository.getMovies();
    this.popularMovies = this.MovieRepository.getPopularMovies();
  }
}
