import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'Film 1',
        description:
          'Lorem ipsum dolor sit amet to shazam consectetur adipisicing elit. Maiores modi perspiciatis neque laborum nulla non vel dolorum dolores impedit repellendus asperiores eveniet, fugiat fuga officia pariatur ea. Temporibus, eos facere.',
        Image: '1.jpeg',
        isPopular: false,
        datePublished: new Date(1982, 10, 6),
      },
      {
        id: 2,
        title: 'Film 2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores modi perspiciatis neque laborum nulla non vel dolorum dolores impedit repellendus asperiores eveniet, fugiat fuga officia pariatur ea. Temporibus, eos facere.',
        Image: '2.jpeg',
        isPopular: true,
        datePublished: new Date(2002, 10, 6),
      },
      {
        id: 3,
        title: 'Film 3',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores modi perspiciatis neque laborum nulla non vel dolorum dolores impedit repellendus asperiores eveniet, fugiat fuga officia pariatur ea. Temporibus, eos facere.',
        Image: '3.jpeg',
        isPopular: false,
        datePublished: new Date(2001, 10, 3),
      },
      {
        id: 4,
        title: 'Film 4',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores modi perspiciatis neque laborum nulla non vel dolorum dolores impedit repellendus asperiores eveniet, fugiat fuga officia pariatur ea. Temporibus, eos facere.',
        Image: '4.jpeg',
        isPopular: true,
        datePublished: new Date(1992, 8, 6),
      },
      {
        id: 5,
        title: 'Film 5',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores modi perspiciatis neque laborum nulla non vel dolorum dolores impedit repellendus asperiores eveniet, fugiat fuga officia pariatur ea. Temporibus, eos facere.',
        Image: '4.jpeg',
        isPopular: true,
        datePublished: new Date(1992, 10, 6),
      },
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getPopularMovies(): Movie[] {
    return this.movies.filter((i) => i.isPopular);
  }

  getMovieById(id: number): Movie {
    return this.movies.find((i) => i.id == id);
  }
}
