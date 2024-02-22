// UpdateMovieForm.js
import React, { useState } from 'react';
import { updateMovie } from '../services/dataServices';
import { useNavigate } from 'react-router-dom';
import './UpdateMovieForm.css'; // Ek CSS dosyasını import et

const UpdateMovieForm = ({ movie }) => {
    const [name, setName] = useState(movie.name);
    const [year, setYear] = useState(movie.year);
    const [actors, setActors] = useState(movie.actors);
    const [type, setType] = useState(movie.type);
    const [imagePath, setImagePath] = useState(movie.imagePath);

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await updateMovie(movie.id, name, type, year, actors, imagePath);

        if (response === true) {
            alert("Film başarıyla güncellendi!");
            navigate('/'); // Anasayfaya yönlendirme

        } else {
            alert("Film güncellenirken hata oluştu");
        }
    };

    return (
        <div className="update-movie-form-container">
            <h3>Film Bilgilerini Güncelle</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Film Adı:</label>
                    <input
                        type="text"
                        id="title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="year">Yıl:</label>
                    <input
                        type="text"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="actors">Aktor:</label>
                    <input
                        type="text"
                        id="actors"
                        value={actors}
                        onChange={(e) => setActors(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="type">Tür:</label>
                    <input
                        type="text"
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="imagePath">Poster Link:</label>
                    <textarea
                        id="imagePath"
                        value={imagePath}
                        onChange={(e) => setImagePath(e.target.value)}
                        required
                    />
                </div>
                <button className="btn-submit" type="submit">Güncelle</button>
            </form>
        </div>
    );
};

export default UpdateMovieForm;