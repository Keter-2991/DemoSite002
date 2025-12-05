import Header from '@/components/Header';
import AdmissionHero from './AdmissionHero';
import AdmissionGuide from './AdmissionGuide';
import AdmissionProcess from './AdmissionProcess';
import VisitForm from './VisitForm';
import FAQ from './FAQ';

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AdmissionHero />
      <AdmissionGuide />
      <AdmissionProcess />
      <VisitForm />
      <FAQ />
    </div>
  );
}
