'use client';

import { ThemeProvider } from 'next-themes';

const Provider = ({ children }) => {
    return (
        <ThemeProvider
            defaultTheme='system'
            attribute='class'
        >
            <div className='bg-white text-black dark:bg-black dark:text-white'>{children}</div>
        </ThemeProvider>
    );
};

export default Provider;
