import NavbarItem from './NavbarItem.component';

const Navbar = () => {
    return (
        <div className='flex justify-center gap-20 dark:bg-gray-500 bg-amber-200 p-4 lg:text-lg'>
            <NavbarItem
                title='Top Rated Movies'
                param='movies'
            />
            <NavbarItem
                title='Top Rated Series'
                param='series'
            />
        </div>
    );
};

export default Navbar;
