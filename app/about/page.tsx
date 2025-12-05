import Header from '@/components/Header';
import AboutHero from './AboutHero';
import ChairmanMessage from './ChairmanMessage';
import Philosophy from './Philosophy';
import OrganizationInfo from './OrganizationInfo';
import History from './History';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <ChairmanMessage />
      <Philosophy />
      <OrganizationInfo />
      <History />
    </div>
  );
}
