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

export default function NurseryDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <DirectorMessage nurseryId={params.id} />
      <FeaturesSection nurseryId={params.id} />
      <DailyLifeSection nurseryId={params.id} />
      <DailySchedule nurseryId={params.id} />
      <FacilityInfo nurseryId={params.id} />
      <NewsSection nurseryId={params.id} />
      <ComplaintsSection nurseryId={params.id} />
      <AnnualEvents nurseryId={params.id} />
    </div>
  );
}
