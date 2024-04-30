import {Link} from 'react-router-dom'

function MovieCard({title, id, genre, time}) {

  return (
    <article>
        <h2>{title}</h2>
        <p>Genre: {genre}</p>
        <p>Time: {time} minutes</p>
        <Link to={`/movie/${id}`}>View Info</Link>
    </article>
  )
}

export default MovieCard