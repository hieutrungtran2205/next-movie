import { BACKGROUND_COLOR } from '@/common/utils/const';
import { Box } from '@mui/material';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import Header from './header';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PhimMoiDaDen',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Box bgcolor={BACKGROUND_COLOR} pt={10} minHeight="100vh">
            <Header />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
