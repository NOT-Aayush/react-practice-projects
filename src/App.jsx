import './css/App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import Favs from './pages/Favs.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <div>
    <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favourites" element={<Favs />}/>
      </Routes>

    </main>
    </div>
  )
}
export default App
