import { httpGetSingleSeries } from '@/app/utils/requests';

import DetailsCard from '@/components/DetailsCard.component';

const SeriesPage = async ({ params }) => {
    const data = await httpGetSingleSeries(params.id);

    const { series, message } = data;

    const isNull =
        !series._id ||
        !series.rank ||
        !series.title ||
        !series.description ||
        !series.big_image ||
        !series.genre ||
        !series.rating ||
        !series.year;

    return <main>{!isNull && <DetailsCard data={series} />}</main>;
};

export default SeriesPage;
