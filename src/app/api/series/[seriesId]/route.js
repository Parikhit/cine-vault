import { NextResponse } from 'next/server';

import Series from '@/modals/series.modal';
import { connectDB } from '@/config/db';

export const GET = async (_req, { params }) => {
    const seriesId = params.seriesId;

    try {
        await connectDB();
        if (typeof seriesId === 'number')
            return NextResponse.json({ message: 'Not a valid Id!!!' });

        const series = await Series.findOne({ _id: seriesId });

        return NextResponse.json({ message: 'Series Details fetched successfully!', series });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch movie details!', error });
    }
};
