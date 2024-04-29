import { Schema, model, models } from 'mongoose';

const SeriesSchema = new Schema({
    rank: { type: Number, required: true },
    title: { type: String },
    description: { type: String },
    image: { type: String },
    big_image: { type: String },
    genre: { type: [String] },
    thumbnail: { type: String },
    rating: { type: Number },
    id: { type: String },
    year: { type: String },
    imdbid: { type: String },
    imdb_link: { type: String },
});

const Series = models.Series || model('Series', SeriesSchema);

export default Series;
