import { NextResponse } from 'next/server';
import Series from '@/modals/series.modal';

import { connectDB } from '@/config/db';

export const GET = async () => {
    try {
        await connectDB();
        const series = await Series.find({});

        return NextResponse.json({ message: 'Series Fetched Successfully!!!', series });
    } catch (error) {
        return NextResponse.json({ message: 'Error in fetching series', error });
    }
};
