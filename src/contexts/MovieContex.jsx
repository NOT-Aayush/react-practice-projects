import { createContext, useState, useContext , useEffect , useRef } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])
    const isFirstRender = useRef(true)

    useEffect(() => {
        try {
            const storedFavs = localStorage.getItem("favourites")
            if (storedFavs && storedFavs !== "undefined") {
                setFavourites(JSON.parse(storedFavs))
            }
        } catch (err) {
            console.error("Failed to parse favourites:", err)
            localStorage.removeItem("favourites")
        }
    }, [])
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
        return
    }
        localStorage.setItem('favourites', JSON.stringify(favourites))
    },[favourites])

    const addToFavourites = (movie) =>{
        setFavourites(prev => [...prev,movie])
    }
    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavourite = (movieId) =>{
        return favourites.some(movie => movie.id === movieId)
    }

    const values = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    }
    return <MovieContext.Provider value={values}>
        {children}
    </MovieContext.Provider>
}