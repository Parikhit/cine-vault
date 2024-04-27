import NavbarItem from './NavbarItem.component';

const Navbar = () => {
    return (
        <div className='flex justify-center gap-14 dark:bg-gray-500 bg-amber-200 p-4 lg:text-lg'>
            <NavbarItem
                title='Movies'
                param='fetchMovies'
            />
            <NavbarItem
                title='Series'
                param='fetchSeries'
            />
        </div>
    );
};

export default Navbar;
