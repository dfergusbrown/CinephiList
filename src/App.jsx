import { useEffect, useState } from 'react';
import { Container, Row }from 'react-bootstrap';
import MovieList from './components/MoviesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchForm from './components/SearchForm';
import MyNavbar from './components/MyNavbar';
import MyCarousel from './components/MyCarousel';
import Footer from './components/Footer';

const App = () => {
  const [movies, setMovies] = useState ([]);
    
  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=Pirates of the Caribbean&apikey=5e6f12dc"

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search)
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <>
      <MyNavbar />
      <SearchForm />
      <MyCarousel />

      <Container className='movie-app'>
        <p> <b> Trending now</b></p>
          <Row>
          <MovieList movies={movies}/>
          </Row>
      </Container>

      <Footer />
    </>
  );
};

export default App;
