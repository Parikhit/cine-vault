import { NextResponse } from 'next/server';

import Movie from '@/modals/movies.modal';
import { connectDB } from '@/config/db';

export const GET = async (req, { params }) => {
    const movieId = params.movieId;

    try {
        if (typeof movieId === 'number') return NextResponse.json({ message: 'Not a valid Id!!!' });

        await connectDB();
        const movie = await Movie.findById({ _id: movieId });

        return NextResponse.json({ message: 'Movie successfully fetched', movie });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch movie details!', error });
    }
};
