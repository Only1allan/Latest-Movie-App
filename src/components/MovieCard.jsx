import "../css/MovieCard.css"
const MovieCard = ({movie}) => {
    const onClick = () => {
        console.log("Clicked on movie: ", movie.Title);
    }
  return (
    <div className='movie-card'>
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.Title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onClick}>❤️</button>
            </div>
        </div>

        <div className="movie-info">
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-year">{movie.release_date}</p>
        </div>
      
    </div>
  )
}

export default MovieCard
