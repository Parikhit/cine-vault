import { Inter } from 'next/font/google';
import './globals.css';

//components
import Header from '@/components/Header.component';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Cine Vault',
    description:
        "CineVault is your ultimate cinematic treasure trove, offering a comprehensive database of films from across the globe. Dive into a world of movies where you can discover, explore, and engage with your favorite films, actors, directors, and more. Whether you're a casual moviegoer or a hardcore cinephile, CineVault provides a seamless platform to browse, rate, review, and discuss all things cinema. Join our vibrant community of film enthusiasts and unlock a universe of cinematic wonders at your fingertips.",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
