import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import SearchBar from '../components/SearchBar'
import useApiRequest from '../components/useApiRequest'
import FeaturedCarousel from '../components/featuredCarousel/FeaturedCarousel'

function App() {

  return (
    <div className='background'>
      <header className='siteHeader'>
        <div id="sitetitle">
          <h1>CinephiList</h1>
          <h3>your personal movie library</h3>
        </div>
        <div id="navbar">
          <nav>Home</nav>
          <nav>Browse</nav>
          <nav>Login</nav>
        </div>
      </header>
      <SearchBar />
      <FeaturedCarousel />
    </div>
  )
}

export default App
