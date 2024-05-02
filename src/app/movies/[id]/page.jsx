import { httpGetSingleMovie } from '@/app/utils/requests';

import DetailsCard from '@/components/DetailsCard.component';
import React from 'react';

const MoviesPage = async ({ params }) => {
    const data = await httpGetSingleMovie(params.id);

    const { movie, message } = data;

    return (
        <main>
            <DetailsCard data={movie} />
        </main>
    );
};

export default MoviesPage;
