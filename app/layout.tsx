import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

export const lato = localFont({
  src: [
    {
      path: './fonts/Lato/Lato-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Lato/Lato-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/Lato/Lato-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Lato/Lato-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/Lato/Lato-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Lato/Lato-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Lato/Lato-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Lato/Lato-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/Lato/Lato-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Lato/Lato-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});

export const sansitaOne = localFont({
  src: [
    {
      path: './fonts/SansitaOne/SansitaOne-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
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
      <body className={lato.className}>{children}</body>
    </html>
  );
}
