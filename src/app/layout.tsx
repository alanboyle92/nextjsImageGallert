import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { Container, SSRProvider } from '@/Components/bootstrap';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.JS Image Gallery',
  description: 'Tutorial to create an Image Gallery with next.js and Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SSRProvider>
          <main>
            <Container className='py-4'>
              {children}
            </Container>
          </main>
        </SSRProvider>
        </body>
    </html>
  )
}
