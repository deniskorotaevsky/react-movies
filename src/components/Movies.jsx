import { Movie } from "./Movie"


function Movies (props) {
  const {movies} = props;

  return <div className="movies">
    {movies.map(movie => (
        <Movie key={movie.imdbID} {...movie} /> // через спред оператор отправляем ключи вниз
    ))}

  </div>

}

export {Movies}