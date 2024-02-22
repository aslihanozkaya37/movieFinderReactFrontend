
import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.css'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card'>
      <Link to={`movie/${movie.id}`}>
      <img className='movie-poster' src={movie.imagePath} alt={movie.name}/>
      </Link>
      <div className='movie-details'>
        <h3 className='movie-title'>{movie.name}</h3>
        <p className='movie-info'>{movie.type}</p>
        <p className='movie-info'>{movie.year}</p>
      </div>
    </div>
  )
}

export default MovieCard