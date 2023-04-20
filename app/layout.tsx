'use client';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { NavBar } from '@/components/NavBar';
import { Head } from './head';

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <Head />
         <body>
            <ThemeProvider enableSystem={true} attribute="class">
               <NavBar />
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}
