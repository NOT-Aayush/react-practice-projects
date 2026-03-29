import './css/App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import Favs from './pages/Favs.jsx'
import NavBar from './components/NavBar.jsx'
import { MovieProvider } from './contexts/MovieContex.jsx'
function App() {
  return (
    <MovieProvider>
    <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favourites" element={<Favs />}/>
      </Routes>

    </main>
    </MovieProvider>
  )
}
export default App
