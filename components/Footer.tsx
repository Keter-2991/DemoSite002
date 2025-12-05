import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-['Pacifico'] text-teal-400 mb-6">logo</h3>
            <p className="text-gray-400 leading-relaxed">
              子どもたち一人ひとりの個性を大切にする保育を実践しています。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">各園のご案内</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/nurseries/sakura" className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  さくら保育園
                </Link>
              </li>
              <li>
                <Link href="/nurseries/himawari" className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  ひまわり保育園
                </Link>
              </li>
              <li>
                <Link href="/nurseries/mori" className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  もりのこ保育園
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">クイックリンク</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/admission" className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  入園案内
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  お知らせ
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-teal-400 transition-colors cursor-pointer">
                  法人について
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">お問い合わせ</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <i className="ri-phone-line mr-2 mt-1 w-5 h-5 flex items-center justify-center"></i>
                <span>03-1234-5678</span>
              </li>
              <li className="flex items-start text-gray-400">
                <i className="ri-mail-line mr-2 mt-1 w-5 h-5 flex items-center justify-center"></i>
                <span>info@mirai-hoiku.jp</span>
              </li>
              <li className="flex items-start text-gray-400">
                <i className="ri-map-pin-line mr-2 mt-1 w-5 h-5 flex items-center justify-center"></i>
                <span>東京都世田谷区桜新町1-2-3</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 社会福祉法人みらい. All rights reserved.
          </p>
          <a 
            href="https://readdy.ai/?origin=logo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-colors text-sm cursor-pointer"
          >
            Made with Readdy
          </a>
        </div>
      </div>
    </footer>
  );
}
