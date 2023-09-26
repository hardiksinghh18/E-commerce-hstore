import React from 'react';

import CategorySection from './components/CategorySection';
import FeatureSection from './components/FeatureSection';
import HeroSection from './components/HeroSection';
import TrustedSection from './components/TrustedSection';
import Services from './components/Services';

export default function Home() {

  return (
    <>
    
      <HeroSection />
      <CategorySection />
      <FeatureSection />
      <Services />
      <TrustedSection />

    </>
  )
}
