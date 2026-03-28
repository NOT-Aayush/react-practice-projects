import Moviecard from "../components/Moviecard"
import {useState ,useEffect} from "react"
import { SearchMoives ,getPopularMoives } from "../services/api";
import "../css/Home.css"

function Home(){
    const [searchQuery, setSearchQuery ] = useState("");
    const [movies ,setMovies ] = useState([]);
    const [error, setError] = useState(null);
    const [loading , setLoading] = useState(true)

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
    }, [])

    const handelSearch = async (e) => {
        e.preventDefault()
        if (loading) return
        
        if (!searchQuery.trim()){
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
            return
        }


        setLoading(true)
        try{
            const searchResults = await SearchMoives(searchQuery)
            setMovies(searchResults)
            setError(null)
        }catch(err){
            setError("Failed to search Movies.....")
        }finally{
            setLoading(false)
        }

        setSearchQuery("")
    }
    return <div className="home">
        <form onSubmit={handelSearch} className="search-form">
            <input type="text"
            placeholder="Search for movies..."
            className="search-input"
     //       value = {searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn">Search</button>
        </form>

        {error &&  <div className="error-message">{error}</div>}
        {loading ? (<div className="loading">Loading...</div>)
        :(
        <div className="movie-grid">
            {movies.map(movie =>
                (<Moviecard movie={movie} key={movie.id}/>))}
        </div>
        )
        }

    </div>
}

export default Home