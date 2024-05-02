const httpGetAllMovies = async () => {
    'use server';
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`);
    return await response.json();
};

const httpGetAllSeries = async () => {
    'use server';
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series`);
    return await response.json();
};

const httpGetSingleMovie = async (id) => {
    'use server';
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/${id}`);
    return await response.json();
};

const httpGetSingleSeries = async (id) => {
    'use server';
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series/${id}`);
    return await response.json();
};

export { httpGetAllMovies, httpGetAllSeries, httpGetSingleMovie, httpGetSingleSeries };
