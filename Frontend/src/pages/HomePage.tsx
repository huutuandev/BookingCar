import { HeroSection } from '../components/sections/HeroSection';
import { ValuePropsSection } from '../components/sections/ValuePropsSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { FeatureHighlightSection } from '../components/sections/FeatureHighlightSection';
import { StepGuideSection } from '../components/sections/StepGuideSection';
import { PopularRoutesSection } from '../components/sections/PopularRoutesSection';
import { CorporateSection } from '../components/sections/CorporateSection';
import { FaqSection } from '../components/sections/FaqSection';
import { CtaBannerSection } from '../components/sections/CtaBannerSection';

export const HomePage = () => (
  <>
    <HeroSection />
    <ValuePropsSection />
    <ServicesSection />
    <FeatureHighlightSection />
    <StepGuideSection />
    <PopularRoutesSection />
    <CorporateSection />
    <FaqSection />
    <CtaBannerSection />
  </>
);
