'use client';

import { useState, useEffect } from 'react';

import Cards from '@/components/Cards.component';

import { httpGetAllMovies, httpGetAllSeries } from './utils/requests';

const Home = ({ searchParams }) => {
    const genre = searchParams.genre || 'movies';

    const [moviesData, setMoviesData] = useState([]);
    const [seriesData, setSeriesData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const movies = await httpGetAllMovies();
            const series = await httpGetAllSeries();

            setMoviesData(movies.movies);
            setSeriesData(series.series);
        };

        getData();
    }, []);

    console.log(moviesData);
    console.log(seriesData);

    return (
        <main className='flex flex-col items-center justify-between p-24'>
            {genre === 'movies' ? (
                <Cards
                    data={moviesData}
                    type={genre}
                />
            ) : (
                <Cards
                    data={seriesData}
                    type={genre}
                />
            )}
        </main>
    );
};

export default Home;
