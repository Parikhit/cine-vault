const httpGetAllMovies = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`);
    return await response.json();
};

const httpGetAllSeries = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series`);
    return await response.json();
};

const httpGetSingleMovie = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/${id}`);
    return await response.json();
};

const httpGetSingleSeries = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series/${id}`);
    return await response.json();
};

export { httpGetAllMovies, httpGetAllSeries, httpGetSingleMovie, httpGetSingleSeries };
