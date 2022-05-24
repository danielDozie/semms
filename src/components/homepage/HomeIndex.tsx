import BenefitSection from './BenefitSection';
import HeroSection from './HeroSection';
import FeaturedProducts from './FeaturedProducts';
import ParallaxSection  from './ParallaxSection';
import HighlightSection  from './HighlightSection';

/**
 * A server component that displays the content on the homepage 
 */
export default function HomeIndex() {
  
  return (
    <>
      <HeroSection/>
      <BenefitSection/>
      <FeaturedProducts/>
      <ParallaxSection/>  
      <HighlightSection/>
    </>
  );
}
