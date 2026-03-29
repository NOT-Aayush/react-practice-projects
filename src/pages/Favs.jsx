import "../css/Favs.css"
import { useMovieContext } from "../contexts/MovieContex"
import Moviecard from "../components/Moviecard"

function Favs(){
    const {favourites} = useMovieContext()
    if (favourites){
        return (
        <div className="favourites">
            <h2>Your Favourites</h2>
        <div className="movie-grid">
            {favourites.map(movie =>
                (<Moviecard movie={movie} key={movie.id}/>))}
        </div>
        </div>
        )
    }
    return(
        <>
        <div className="favs-empty">
            <h2>No Favourite movies yet</h2>
            <p>Start adding movies to your Favourites to make them appear here</p>
        </div>
        </>
    )
}

export default Favs