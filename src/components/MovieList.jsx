import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard movie={ movie } key={ movie.title } />
        ))}
      </div>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.shape(PropTypes.object).isRequired,
};
