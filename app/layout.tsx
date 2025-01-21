import type { Metadata } from 'next';
import { Lato, Sansita } from 'next/font/google';
import './globals.css';

export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export const sansita = Sansita({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'TraVerse',
  description:
    'A seamless communication chat web application between people who speak different languages.',
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'shortcut icon', url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'apple-mobile-web-app-title': 'TraVerse',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>{children}</body>
    </html>
  );
}
