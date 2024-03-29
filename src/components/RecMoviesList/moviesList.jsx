import AFItop100list from "./AFItop100list";
import useApiRequest from "../useApiRequest";
import { Container, Row }from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addFilm, removeFilm } from "../userSlice";
import store from "../../store";

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
            const title = posterURL.apiData.Title

            const [heart, setHeart] = useState(false)
            const toggleHeart = () => {
              heart ? setHeart(false) : setHeart(true)
            }
            const dispatch = useDispatch()
            const toggleFav = (payload) => {
              heart ? dispatch(removeFilm(payload)) : dispatch(addFilm(payload));
            }
            return (
                <div className="movieItem" key={item}>
                    <img src={posterURL.apiData.Poster} />
                    <div className="overlay">
                      <div className="favButton" ><a onClick={() => {
                          toggleFav(title)
                          console.log(store.getState().userFavorites)
                          toggleHeart()
                      }}>HEART</a></div>
                    </div>
                </div>
            )
        })}
      </Row>
    </Container>
  );
};

export default MovieList;