import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from '../components/searchBar'


function App() {
  // const [movieURL, setURL] = useState({})
  // const baseURL = 'http://www.omdbapi.com/?apikey='

  // const apiKey = '5c02e86e'
  // useEffect(() => {
  //       fetch(baseURL+ apiKey +'&t=jumanji')
  //       .then(response => response.json())
  //       .then(data => {
  //         setURL(data.Poster)
  //         console.log(data)
  //       })
  //       .catch(error => console.log(error))
  // }, [])

  return (
    <div className='container'>
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
    </div>
  )
}

export default App
