import Link from 'next/link';

import MenuItem from './MenuItem.component';

import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const Header = () => {
    return (
        <div className='flex items-center justify-between p-4 max-w-6xl mx-auto'>
            <div className='flex gap-4'>
                <MenuItem
                    title='home'
                    address='/'
                    Icon={AiFillHome}
                />
                <MenuItem
                    title='about'
                    address='/about'
                    Icon={BsFillInfoCircleFill}
                />
            </div>
            <Link
                href='/'
                className='flex items-center gap-1 font-bold'
            >
                <span className='text-2xl bg-amber-500 py-1 px-2 rounded-lg'>Cine</span>
                <span className='text-xl'>Vault</span>
            </Link>
        </div>
    );
};

export default Header;
