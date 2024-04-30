import { useEffect, useState } from "react";
import Card from "../components/ActorsCard";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() =>{
    fetch("http://localhost:4000/actors")
    .then(r => r.json())
    .then(data => setActors(data))
    .catch(error => console.error(error))
  }, [])

  const actorCards = actors.map(actor => {
    const movieList = actor.movies.map(movie => <li key={movie}>{movie}</li>)
    return <Card key={actor.id} name={actor.name} movies={movieList} />
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorCards}
      </main>
    </>
  );
}

export default Actors;