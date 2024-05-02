import Image from 'next/image';

const Loading = () => {
    return (
        <div className='flex justify-center'>
            <Image
                className='mt-60'
                src='loading.svg'
                alt='Loading...'
                width={50}
                height={50}
            />
        </div>
    );
};

export default Loading;
