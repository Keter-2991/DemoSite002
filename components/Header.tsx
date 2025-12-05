'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const scrollToFacilities = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('facilities-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <span className="font-['Pacifico'] text-3xl text-teal-600">logo</span>
          </Link>

          <nav className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              ホーム
            </Link>
            <Link 
              href={pathname === '/' ? '#facilities-section' : '/#facilities-section'}
              onClick={scrollToFacilities}
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              各園紹介
            </Link>
            <Link 
              href="/admission" 
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              入園案内
            </Link>
            <Link 
              href="/recruitment" 
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              採用情報
            </Link>
            <Link 
              href="/news" 
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              お知らせ
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-teal-600 transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              法人情報
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
