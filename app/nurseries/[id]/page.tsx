import Header from '@/components/Header';
import DirectorMessage from './DirectorMessage';
import FeaturesSection from './FeaturesSection';
import DailyLifeSection from './DailyLifeSection';
import DailySchedule from './DailySchedule';
import FacilityInfo from './FacilityInfo';
import NewsSection from './NewsSection';
import ComplaintsSection from './ComplaintsSection';
import AnnualEvents from './AnnualEvents';

export async function generateStaticParams() {
  return [
    { id: 'sakura' },
    { id: 'himawari' },
    { id: 'mori' },
    { id: 'tsukushi' },
    { id: 'cosmos' },
    { id: 'donguri' },
  ];
}

export default async function NurseryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DirectorMessage nurseryId={id} />
      <FeaturesSection nurseryId={id} />
      <DailyLifeSection nurseryId={id} />
      <DailySchedule nurseryId={id} />
      <FacilityInfo nurseryId={id} />
      <NewsSection nurseryId={id} />
      <ComplaintsSection nurseryId={id} />
      <AnnualEvents nurseryId={id} />
    </div>
  );
}
