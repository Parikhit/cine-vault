'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import Loading from '@/app/loading';

const NavbarItem = ({ title, param }) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
    return (
        <Suspense fallback={<Loading />}>
            <div>
                <Link
                    className={`hover:text-amber-500 font-semibold ${
                        genre === param
                            ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
                            : ''
                    }`}
                    href={`/?genre=${param}`}
                >
                    {title}
                </Link>
            </div>
        </Suspense>
    );
};

export default NavbarItem;
