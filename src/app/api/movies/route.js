import { NextResponse } from 'next/server';
import Movie from '@/modals/movies.modal';

// import moviesData from '@/app/utils/moviesData.json';

import { connectDB } from '@/config/db';

export const GET = async () => {
    try {
        await connectDB();
        const movies = await Movie.find();

        return NextResponse.json({ message: 'Movies Fetched Successfully!!!', movies });
    } catch (error) {
        return NextResponse.json({ message: 'Error in fetching movies', error });
    }
};

/*
 export const POST = async () => {
    try {
         await connectDB();
         await Movie.create(moviesData);

        return new NextResponse(JSON.stringify({ message: 'Movies DB created!' }), {
            status: 201,
        });
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: 'Error Adding series!', error }), {
            status: 500,
        });
    }
};
*/
