import React, { useState, useEffect } from 'react'
import { getAllMovie, getMovieById,searchMovies} from '../services/dataServices'
import MovieCard from '../components/MovieCard';
import './HomePage.css'
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
const HomePage = () => {

  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage]=useState('');
  const getMovies = async () => {
    const getMovieData = await getAllMovie();
    console.log(getMovieData.data);
    setMovies(getMovieData.data);
  }

  useEffect(() => {
    getMovies();
  }, []);

  const handleSearch=async(query,year,type)=>{
    setErrorMessage('');
    if(query.trim() ===''){
      setErrorMessage('Lütfen bir film adını giriniz.');
      return;
    } 
    if(year.trim() ===''){
      setErrorMessage('Lütfen yılını giriniz.');
      return;
    } 
    if(type.trim() ===''){
      setErrorMessage('Lütfen film türünü giriniz.');
      return;
    } 
  const response=await searchMovies(query,year,type);
  setMovies(response);
  }

  return (
    <div className='home-page'>
      
      <p>MOVIE FINDER</p>
      <SearchBar onSearch={handleSearch}/>
      <Link to="/movie/add">Yeni Film Ekle</Link>
      <p></p>
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
      <div className='movie-list'>
        {movies && movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  )
}

export default HomePage