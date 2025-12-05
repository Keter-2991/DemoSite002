import Header from '@/components/Header';
import RecruitmentHero from './RecruitmentHero';
import MessageSection from './MessageSection';
import BenefitsSection from './BenefitsSection';
import PositionsSection from './PositionsSection';
import VoicesSection from './VoicesSection';
import ApplicationFlow from './ApplicationFlow';

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <RecruitmentHero />
      <MessageSection />
      <BenefitsSection />
      <PositionsSection />
      <VoicesSection />
      <ApplicationFlow />
    </div>
  );
}
