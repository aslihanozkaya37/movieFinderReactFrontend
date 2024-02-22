import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';
import { getMovieById, deleteMovie } from '../services/dataServices';
import './MovieDetailPage.css';
import UpdateMovieForm from '../components/UpdateMovieForm'; // Güncelleme formunu ekledik


const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate()


  useEffect(() => {
    const fetchMovie = async () => {
      const movieDetails = await getMovieById(id);
      setMovie(movieDetails);
    };

    fetchMovie();
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = async () => {
    const response = await deleteMovie(id);
    if (response === true) {
      alert("Film başarıyla silindi!");
      navigate('/'); // Anasayfaya yönlendirme
    } else {
      alert("Film silinirken hata oluştu!");
    }
  };

  if (!movie) return <div className="loading">Yükleniyor...</div>;

  return (
    <div className="movie-detail">
      <img src={movie.imagePath} alt={movie.name} />
      <div className="movie-detail-info">
        <h2 className="movie-detail-title">{movie.name}</h2>
        <p><strong>Aktor:</strong> {movie.actors}</p>
        <p><strong>Tür:</strong> {movie.type}</p>
        <p><strong>Yıl:</strong> {movie.year}</p>
        <button onClick={handleEditClick}>Güncelle</button>
        <button onClick={handleDeleteClick}>Sil</button>
        {isEditing && <UpdateMovieForm movie={movie} />}
        <Link to="/">Ana Sayfa</Link>
      </div>
    </div>
  );
};

export default MovieDetailPage;
