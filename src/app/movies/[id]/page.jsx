'use client';

import { useState, useEffect } from 'react';

import { httpGetSingleMovie } from '@/app/utils/requests';

import DetailsCard from '@/components/DetailsCard.component';

const MoviesPage = ({ params }) => {
    const id = params.id;

    const [singleMovie, setSingleMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
            const movie = await httpGetSingleMovie(id);

            setSingleMovie(movie);
            getMovie();
        };
    }, [id]);

    const { movie, message } = singleMovie;
    // console.log(movie);

    return <main>{/* <DetailsCard data={movie} /> */}</main>;
};

export default MoviesPage;
