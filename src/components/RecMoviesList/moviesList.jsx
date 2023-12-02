import AFItop100list from "./AFItop100list";
import useApiRequest from "../useApiRequest";

const MovieList = (props) => {
  const randomArray = []
  for (let i = 0; randomArray.length < 5; i++) {
      let newRandomSelection = Math.floor(Math.random() * 123);
      if (!randomArray.includes(AFItop100list[newRandomSelection])) {
          randomArray.push(AFItop100list[newRandomSelection])
      }
  }
  
  return (
    <>
      {randomArray.map(item => {
          const posterURL = useApiRequest(item)
          
          return (
              <div className="movieItem">
                  <img src={posterURL.apiData.Poster} key={item}/>
              </div>
          )
      })}
    </>
  );
};

export default MovieList;