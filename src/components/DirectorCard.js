import React from 'react'

export default function DirectorCard({ name, movies }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  )
}