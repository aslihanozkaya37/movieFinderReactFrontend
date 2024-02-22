import axios from "axios";

const movieApi = axios.create({
    baseURL: 'http://localhost:8080/'
});

export const getAllMovie = async () => {
    try {
        const response = await movieApi.get('movies');
        return response;
    } catch (error) {
        console.error('tüm filmler getirilirken hata', error);
    }
};
export const getMovieById = async (movieId) => {
    console.log(movieId);
    try {
        const response = await movieApi.get(`movies/${movieId}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('seçtiğim film getirilirken hata', error);
    }
};
export const getMovieByFilters = async (name, type, year) => {
    try {
        const response = await movieApi.get(`movies?name=${name}&type=${type}&year=${year}`);
        return response;
    } catch (error) {
        console.error('seçtiğim film getirilirken hata', error);
    }
};

export const deleteMovie = async (movieId) => {
    try {
        const response = await movieApi.delete(`movies/${movieId}`);
        return response.data;
    } catch (error) {
        console.error('film silinirken hata', error);
    }
};

export const updateMovie=async(movieId,name,type,year,actors,imagePath)=>{
    try {
        const response = await movieApi.put(`movies/${movieId}`,{
            movieId,name, type, year, actors, imagePath
            },
        );
        return response.data;
    } catch (error) {
        console.error('film güncellenirken hata', error);
    }
};
export const addMovie=async(name,type,year,actors,imagePath)=>{
    try {
        const response = await movieApi.post(`movies`,{
            name, type, year, actors, imagePath
            },
        );
        return response;
    } catch (error) {
        console.error('film eklenirken hata', error);
    }
};
export const searchMovies=async(name,year,type)=>{
    try {
        const response = await movieApi.post(`movies/filterData`,{
            name, type, year
            },
        );
        return response.data;
    } catch (error) {
        console.error('seçtiğim film getirilirken hata', error);
    }
};

