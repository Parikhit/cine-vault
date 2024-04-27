import NavbarItem from './NavbarItem.component';

const Navbar = () => {
    return (
        <div className='flex justify-center gap-6 dark:bg-gray-500 bg-amber-200 p-4 lg:text-lg'>
            <NavbarItem
                title='Trending'
                param='fetchTrending'
            />
            <NavbarItem
                title='Highest Rated'
                param='fetchTopRated'
            />
        </div>
    );
};

export default Navbar;
