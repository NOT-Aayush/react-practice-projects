const API_KEY = "523b110a7b73ebcfed3358d048435a83"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMoives = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

export const SearchMoives = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    return data.results
}