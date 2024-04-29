import NavbarItem from './NavbarItem.component';

import { Suspense } from 'react';
import Loading from '@/app/loading';

const Navbar = () => {
    return (
        <div className='flex justify-center gap-20 dark:bg-gray-500 bg-amber-200 p-4 lg:text-lg'>
            <Suspense fallback={<Loading />}>
                <NavbarItem
                    title='Top Rated Movies'
                    param='movies'
                />
                <NavbarItem
                    title='Top Rated Series'
                    param='series'
                />
            </Suspense>
        </div>
    );
};

export default Navbar;
