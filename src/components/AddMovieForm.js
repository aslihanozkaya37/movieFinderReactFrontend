// MovieForm.js
import React, { useState } from "react";
import "./AddMovieForm.css"; 
import { Link } from 'react-router-dom';

const AddMovieForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [actors, setActors] = useState('');
    const [type, setType] = useState('');
    const [imagePath, setImagePath] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const movieData = {
            name: name,
            year: year,
            type: type,
            actors: actors,
            imagePath: imagePath,
        };

        onSubmit(movieData);
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h2>Film Ekle</h2>
            <div className="form-group">
                <label htmlFor="name">Film Adı:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
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
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="type">Tür:</label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="actors">Oyuncular:</label>
                <input
                    type="text"
                    id="actors"
                    name="actors"
                    value={actors}
                    onChange={(e) => setActors(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="imagePath">Poster URL:</label>
                <input
                    type="text"
                    id="imagePath"
                    name="imagePath"
                    value={imagePath}
                    onChange={(e) => setImagePath(e.target.value)}
                    required
                />
            </div>
            <button className="btn-submit" type="submit">Ekle</button>
            <p></p>
            <div><Link to="/">Ana Sayfa</Link></div>
        </form>
    );
};

export default AddMovieForm;