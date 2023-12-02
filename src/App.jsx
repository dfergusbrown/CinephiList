import { Container, Row }from 'react-bootstrap';
import MovieList from './components/RecMoviesList/moviesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchForm from './components/SearchBar/SearchForm';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';

const App = () => {

  return (
    <>
      <MyNavbar />
      <SearchForm />

      <Container className='movie-app'>
        <p> <b> Trending now</b></p>
          <Row>
            <MovieList/>
          </Row>
      </Container>

      <Footer />
    </>
  );
};

export default App;
