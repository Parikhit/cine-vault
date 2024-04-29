import { httpGetSingleMovie } from '@/app/utils/requests';

import DetailsCard from '@/components/DetailsCard.component';

const MoviesPage = async ({ params }) => {
    const data = await httpGetSingleMovie(params.id);

    const { movie, message } = data;

    // const isNull =
    //     !movie?._id ||
    //     !movie?.rank ||
    //     !movie?.title ||
    //     !movie?.description ||
    //     !movie?.big_image ||
    //     !movie?.genre ||
    //     !movie?.rating ||
    //     !movie?.year;

    return (
        <main>
            <DetailsCard data={movie} />
        </main>
    );
};

export default MoviesPage;
