import React from "react";
import AddMovieForm from "../components/AddMovieForm";
import { addMovie } from '../services/dataServices';
import { useNavigate } from 'react-router-dom';

const AddMoviePage = () => {

    const navigate = useNavigate()

    const handleAddMovie = async (movieData) => {
        const response = await addMovie(movieData.name, movieData.type, movieData.year, movieData.actors, movieData.imagePath);
        console.log(response.status);
        if (response.status === 200) {
            alert("Film başarıyla eklendi!");
            navigate('/'); // Anasayfaya yönlendirme
        } else {
            alert("Film eklenemedi");
        }
    };

    return (
        <div>
            <AddMovieForm onSubmit={handleAddMovie} />
        </div>
    );
};

export default AddMoviePage;