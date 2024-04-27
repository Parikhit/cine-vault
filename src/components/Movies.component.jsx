'use client';

import { useState } from 'react';

const Movies = ({ movies }) => {
    return (
        <div>
            {movies.map((movie, id) => (
                <div key={id}>{movie.title}</div>
            ))}
        </div>
    );
};

export default Movies;
