import Header from '@/components/Header';
import NewsHero from './NewsHero';
import NewsList from './NewsList';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <NewsHero />
      <NewsList />
    </div>
  );
}
