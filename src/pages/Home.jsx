import Moviecard from "../components/Moviecard"
import {useState ,useEffect} from "react"
import { SearchMoives ,getPopularMoives } from "../services/api";
import "../css/Home.css"

function Home(){
    const [searchQuery, setSearchQuery ] = useState("");
    const [movies ,setMovies ] = userState([]);
    const [error, setError] = useState(null);
    const [loading , setLoading] = useStare(true)

    useEffect(()=> {
        const loadpopularMovies = async () =>{
            try{
                const popularMovies =await getPopularMoives()
                setMovies(popularMovies)
            }catch (err){
                console.log(err)
                setError("Falied to load movies")
            }
            finally{
                setLoading(false)
            }
        }
        loadpopularMovies()
    }, [SearchMoives ,getPopularMoives])

    const handelSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }
    return <div className="home">
        <form onSubmit={handelSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input" 
            value = {searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">Search</button>
        </form>
        <div className="movie-grid">
            {movies.map(movie => 
                (<Moviecard movie={movie} key={movie.id}/>))}
        </div>
    </div>
}

export default Home