import MovieCard from './MovieCard'
import './MovieList.css'

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.year}
          rating={movie.rating}
          poster={movie.poster}
          genre={movie.genre}
          description={movie.description}
        />
      ))}
    </div>
  )
}

export default MovieList