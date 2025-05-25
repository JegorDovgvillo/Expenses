import type { Metadata } from 'next';
import Header from '../Components/Header/Header';
import './global.css';
import './reset.css';

export const metadata: Metadata = {
  title: 'Expenses App',
  description: 'App for your expenses',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
