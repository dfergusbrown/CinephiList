const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={movie.imdbID} className="MovieItem">
          <img src={movie.Poster} alt='movie' style={{ margin: '0', padding: '0' }} />
        </div>
      ))}
    </>
  );
};

export default MovieList;