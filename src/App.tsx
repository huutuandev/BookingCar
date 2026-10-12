import React from 'react';
import { TopBanner } from './components/layout/TopBanner';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ValuePropsSection } from './components/sections/ValuePropsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { FeatureHighlightSection } from './components/sections/FeatureHighlightSection';
import { StepGuideSection } from './components/sections/StepGuideSection';
import { PopularRoutesSection } from './components/sections/PopularRoutesSection';
import { CorporateSection } from './components/sections/CorporateSection';
import { FaqSection } from './components/sections/FaqSection';
import { CtaBannerSection } from './components/sections/CtaBannerSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#232A37] flex flex-col font-sans antialiased selection:bg-[#EAFAF3] selection:text-[#119C82]">
      {/* 1. Top Announcement Bar */}
      <TopBanner />

      {/* 2. Main Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 3. Hero Section with Booking Form & Visual Artwork */}
        <HeroSection />

        {/* 4. Value Proposition Bar */}
        <ValuePropsSection />

        {/* 5. Services Section */}
        <ServicesSection />

        {/* 6. Feature / Benefit Highlight */}
        <FeatureHighlightSection />

        {/* 7. How it Works (3 Steps) */}
        <StepGuideSection />

        {/* 8. Popular Routes */}
        <PopularRoutesSection />

        {/* 9. Corporate Solutions */}
        <CorporateSection />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. Call to Action Banner */}
        <CtaBannerSection />
      </main>

      {/* 12. Footer */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
