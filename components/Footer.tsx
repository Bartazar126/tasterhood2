import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-24 border-t border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
          
          <div className="space-y-8 max-w-sm">
            <Link href="/" className="text-2xl font-black uppercase tracking-tighter">Tasterhood.</Link>
            <p className="text-xl font-medium leading-tight">
              Budapest újhullámos street food étterme a 7. kerület szívében.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16 text-sm font-bold uppercase tracking-widest">
            <ul className="space-y-4">
              <li><Link href="#menu" className="hover:text-orange-600 transition-colors">Étlap</Link></li>
              <li><Link href="#delivery" className="hover:text-orange-600 transition-colors">Kiszállítás</Link></li>
              <li><Link href="#about" className="hover:text-orange-600 transition-colors">Rólunk</Link></li>
            </ul>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="#" className="hover:text-black transition-colors">Instagram</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">Facebook</Link></li>
              <li><Link href="#" className="hover:text-black transition-colors">TikTok</Link></li>
            </ul>
          </div>

        </div>

        <div className="flex justify-between items-end mt-32 pt-8 border-t border-black/10">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">© 2026 Tasterhood Bp.</p>
          <p className="text-[10vw] leading-[0.8] font-black tracking-tighter opacity-5 select-none pointer-events-none">TASTERHOOD</p>
        </div>

      </div>
    </footer>
  );
}
