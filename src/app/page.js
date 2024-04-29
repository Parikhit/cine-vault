import Cards from '@/components/Cards.component';

import { httpGetAllMovies, httpGetAllSeries } from './utils/requests';

const Home = async ({ searchParams }) => {
    const genre = searchParams.genre || 'movies';

    const moviesData = await httpGetAllMovies();
    const seriesData = await httpGetAllSeries();
    // console.log(moviesData);
    // console.log(seriesData);

    return (
        <main className='flex flex-col items-center justify-between p-24'>
            {genre === 'movies' ? (
                <Cards
                    data={moviesData.movies}
                    type={genre}
                />
            ) : (
                <Cards
                    data={seriesData.series}
                    type={genre}
                />
            )}
        </main>
    );
};

export default Home;
