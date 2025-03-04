import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Example',
  description: 'Example',
};

export default function RootLayout({
  modals,
  auth,
  children,
}: Readonly<{
  modals: React.ReactNode;
  auth: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {modals}
        {auth}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
