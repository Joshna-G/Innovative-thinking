import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from './components/Navbar'; 
import Drawer from './components/Drawer'; 
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
     <body className={inter.className}>
        <Navbar />
        <Drawer />
        <div style={{ 
          marginTop: "70px", 
          marginLeft: "70px", 
          minHeight: "calc(100vh - 70px)",
          padding: "20px"
        }}>
          {children}
        </div>

      </body>
    </html>
  );
}