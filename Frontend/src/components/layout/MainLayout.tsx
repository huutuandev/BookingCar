import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="min-h-screen bg-white text-[#232A37] flex flex-col font-sans antialiased selection:bg-[#EAFAF3] selection:text-[#119C82]">
    <Navbar />
    <main className="flex-1">{children}</main>
    <div id="footer">
      <Footer />
    </div>
  </div>
);
