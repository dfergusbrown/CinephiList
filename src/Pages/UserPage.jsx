import { Container } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"


const UserPage = () => { 
    const favorites = useSelector(state => state.userFavorites)
    console.log(favorites)
    const [heart, setHeart] = useState(false)
    const toggleHeart = () => {
      heart ? setHeart(false) : setHeart(true)
    }
    const dispatch = useDispatch()
    const toggleFav = (action) => {
      heart ? dispatch(removeFilm(action.payload)) : dispatch(addFilm(action.payload));
    }
 return(
    <Container>
        {favorites.map(item => {
            const posterURL = useApiRequest(item)
            
            return (
                <div className="movieItem" key={item}>
                    <img src={posterURL.apiData.Poster} />
                    <div className="overlay">
                      <div className="favButton" ><a onClick={() => {
                          toggleFav(posterURL.apiData.Title)
                          toggleHeart()
                      }}
                      style={heart ? {color: 'white'} : {backgroundColor: 'blue'}}
                      >HEART</a></div>
                    </div>
                </div>
            )
        })}
    </Container>
)
}

export default UserPage