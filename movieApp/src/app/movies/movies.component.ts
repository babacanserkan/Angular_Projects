import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { AlerifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';

declare let alertify: any;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService],
})
export class MoviesComponent implements OnInit {
  title: string = 'Film listesi';
  movies: Movie[] = [];
  FilteredMovies: Movie[] = [];
  filterText: string = '';

  constructor(
    private alertify: AlerifyService,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
      this.FilteredMovies = this.movies;
    });
  }

  // Filmleri filtreleme
  onInputChange() {
    const searchText = this.filterText.toLowerCase();

    this.FilteredMovies = searchText
      ? this.movies.filter(
          (m) =>
            m.title.indexOf(searchText) !== -1 ||
            m.description.indexOf(searchText) !== -1
        )
      : this.movies;
  }

  // Listeye eleman ekleme
  addToList($event: any, movie: Movie) {
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = 'Listeden çıkar.';
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');

      // Alert succes
      this.alertify.success(movie.title + ' Listene eklendi');
    } else {
      $event.target.innerText = 'Listeden Ekle.';
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');

      // Alert error
      this.alertify.error(movie.title + ' Listeden çıkarıldı.');
    }
  }
}
