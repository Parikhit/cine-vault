import Movies from '@/components/Movies.component';
import { fetchData, moviesOptions } from './utils/requests';

const Home = async ({ searchParams }) => {
    const genre = searchParams.genre || 'fetchMovies';
    const movies = await fetchData(
        `https://imdb-top-100-movies.p.rapidapi.com/${genre === 'fetchSeries' ? 'series/' : ''}`,
        moviesOptions
    );

    if (!movies) throw newError('Failed to fetch movies!');

    return (
        <main className='flex flex-col items-center justify-between p-24'>
            <Movies movies={movies} />
        </main>
    );
};

export default Home;
