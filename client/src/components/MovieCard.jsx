import './MovieCard.css'
function MovieCard(props) {
    return (
      <div className="movie-card">
        <img
          src={props.poster}
          alt={props.title}
          className="movie-poster"
        />
  
        <div className="movie-info">
          <h2>{props.title}</h2>
          <p>Year: {props.year}</p>
          <p>Rating: ⭐ {props.rating}</p>
          <p>Genre: {props.genre}</p>
          <p>{props.description}</p>
        </div>
      </div>
    )
  }
  
  export default MovieCard