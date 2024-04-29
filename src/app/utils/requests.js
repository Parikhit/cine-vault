const API_URL = 'http://localhost:3000/api';

export const httpGetAllMovies = async () => {
    const response = await fetch(`${API_URL}/movies`);
    return await response.json();
};

export const httpGetAllSeries = async () => {
    const response = await fetch(`${API_URL}/series`);
    return await response.json();
};

export const httpGetSingleMovie = async (id) => {
    const response = await fetch(`${API_URL}/movies/${id}`);
    return await response.json();
};

export const httpGetSingleSeries = async (id) => {
    const response = await fetch(`${API_URL}/series/${id}`);
    return await response.json();
};
