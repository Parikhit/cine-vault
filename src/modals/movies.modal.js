import { Schema, model, models } from 'mongoose';

const MovieSchema = new Schema({
    rank: { type: Number, required: true },
    title: { type: String },
    description: { type: String },
    image: { type: String },
    big_image: { type: String },
    genre: { type: [String] },
    thumbnail: { type: String },
    rating: { type: String },
    id: { type: String },
    year: { type: Number },
    imdbid: { type: String },
    imdb_link: { type: String },
});

const Movie = models.Movie || model('Movie', MovieSchema);

export default Movie;
