import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const iusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export {
    inter,
    iusitana
}