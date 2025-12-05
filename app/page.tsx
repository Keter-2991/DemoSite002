'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import NewsSection from '@/components/home/NewsSection';
import FacilitiesSection from '@/components/home/FacilitiesSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import RecruitmentCTA from '@/components/home/RecruitmentCTA';
import AdmissionCTA from '@/components/home/AdmissionCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <NewsSection />
      <PhilosophySection />
      <FacilitiesSection />
      <RecruitmentCTA />
      <AdmissionCTA />
      <Footer />
    </div>
  );
}