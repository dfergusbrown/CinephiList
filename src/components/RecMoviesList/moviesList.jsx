import AFItop100list from "./AFItop100list";
import useApiRequest from "../useApiRequest";
import { Container, Row }from 'react-bootstrap';

const MovieList = (props) => {
  const randomArray = []
  for (let i = 0; randomArray.length < 5; i++) {
      let newRandomSelection = Math.floor(Math.random() * 122);
      if (!randomArray.includes(AFItop100list[newRandomSelection])) {
          randomArray.push(AFItop100list[newRandomSelection])
      }
  }
  
  return (
    <Container className='movie-app'>
      <p> <b> Trending now</b></p>
      <Row>
        {randomArray.map(item => {
            const posterURL = useApiRequest(item)
            
            return (
                <div className="movieItem" key={item}>
                    <img src={posterURL.apiData.Poster} />
                </div>
            )
        })}
      </Row>
    </Container>
  );
};

export default MovieList;