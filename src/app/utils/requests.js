'use server';

const httpGetAllMovies = async () => {
    const response = await fetch(`/api/movies`);
    return await response.json();
};

const httpGetAllSeries = async () => {
    const response = await fetch(`/api/series`);
    return await response.json();
};

const httpGetSingleMovie = async (id) => {
    const response = await fetch(`/api/movies/${id}`);
    return await response.json();
};

const httpGetSingleSeries = async (id) => {
    const response = await fetch(`/api/series/${id}`);
    return await response.json();
};

export { httpGetAllMovies, httpGetAllSeries, httpGetSingleMovie, httpGetSingleSeries };
