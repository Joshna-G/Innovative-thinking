import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from './components/Navbar'; 
import Drawer from './components/BottomNav'; 
import { Inter } from 'next/font/google';
import { Great_Vibes } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: '400',
  variable: '--font-vibes' 
});

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
     <body className={greatVibes.variable}>
        <Navbar />
        <Drawer />
        <div style={{ 
          minHeight: "calc(100vh - 70px)",
          padding: "20px"
        }}>
          {children}
        </div>

      </body>
    </html>
  );
}