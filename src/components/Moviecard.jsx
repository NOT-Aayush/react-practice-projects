import '../css/Moviecard.css'
import { useMovieContext } from '../contexts/MovieContex'

function Moviecard({movie}){
    const {isFavourite ,addToFavourites , removeFromFavourites} = useMovieContext()

    const favourites = isFavourite(movie.id)

    function OnFavClick(e){
        e.preventDefault()
        if (favourites) removeFromFavourites(movie.id)
        else addToFavourites(movie)
    }
    return(
        <>
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                <div className="movie-overlay">
                    <button className={`fav-btn ${favourites ? "active" : ""}`} onClick={OnFavClick}>♡</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}{}</p>
            </div>
        </div>
        </>
    )
}

export default Moviecard