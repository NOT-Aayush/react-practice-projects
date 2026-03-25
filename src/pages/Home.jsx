import Moviecard from "../components/Moviecard"
import {useState} from "react"
import "../css/Home.css"

function Home(){
    const [searchQuery, setSearchQuery ] = useState("");
    let movies =[
        {id:1, title:"John Wick", release_date:"2022"},
        {id:2, title:"Terminator", release_date:"1998"},
        {id:3, title:"Rocky", release_date:"1986"},
        {id:4, title:"matrix", release_date:"2002"}
    ]

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