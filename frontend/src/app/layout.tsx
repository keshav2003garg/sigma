import '@/styles/globals.css';
import { Metadata } from 'next';

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'sigma',
    description: 'Home page for sigma, a video processing api service.',
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
