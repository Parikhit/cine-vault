import Image from 'next/image';
import Link from 'next/link';

const Card = ({ data, type }) => {
    const { _id, title, description, image } = data;

    return (
        <div className='border-2 border-amber-500 shadow-lg rounded-lg p-1 hover:scale-105 transition-transform my-2 sm:my-0'>
            <p className='p-1'>{title}</p>
            <Link href={`/${type}/${_id}`}>
                <Image
                    className='sm:rounded-t-lg'
                    src={image}
                    width={500}
                    height={500}
                    alt={`${title}_poster`}
                />
            </Link>
            <p className='text-sm text-balance truncate line-clamp-3 p-1'>{description}</p>
        </div>
    );
};

export default Card;
