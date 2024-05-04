'use client';

import Image from 'next/image';

const DetailsCard = ({ data }) => {
    const { title, rank, big_image, description, genre, rating, year } = data;
    console.log(data);
    return (
        <div className='flex flex-col sm:flex-row gap-4 max-w-6xl h-fit overflow-x-hidden mx-auto p-4'>
            <div className='flex flex-col gap-4 items-center justify-around'>
                <h1 className='dark:bg-gray-500 bg-amber-500 rounded-lg py-2 px-4  text-xl font-semibold text-white'>
                    {/* {title?.title} */}Title
                </h1>
                <div className='flex flex-col items-center justify-center bg-amber-600 w-24 h-24 rounded-full text-white font-semibold'>
                    <p className='text-sm'>IMDb Rank</p>
                    <p className='text-3xl'>{`${rank}/10`}</p>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4'>
                <Image
                    className='border-2 border-amber-600 rounded-lg p-2'
                    src={big_image}
                    alt={`${title}_image`}
                    width={400}
                    height={400}
                />
                <div className='flex p-10 flex-col justify-center gap-6'>
                    <div>
                        <h1 className='uppercase font-semibold'>description :</h1>
                        <p className='dark:bg-gray-500 bg-amber-200 font-medium p-2 rounded-lg'>
                            {description}
                        </p>
                    </div>

                    <div className='flex gap-4 text-center'>
                        {genre.map((item, id) => (
                            <span
                                key={id}
                                className='bg-amber-500 rounded-lg p-2 font-semibold'
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className='bg-rose-500 w-28 px-3 py-1 flex items-center justify-center gap-2 rounded-md font-semibold text-white'>
                        <p className='text-sm'>Rating:</p>
                        <p className='text-xl'>{rating}</p>
                    </div>

                    <div className='flex items-center gap-2 dark:bg-gray-500 bg-amber-200 w-fit px-2 py-1 rounded-lg font-semibold'>
                        <p className='text-sm'>Year of release:</p>
                        <p className='text-xl'>{year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
