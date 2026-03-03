import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
            alt="Restaurant Vibe"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center justify-center h-full pt-20">
        
        {/* Main Title - Responsive & Impactful */}
        <div className="relative">
          <h1 className="text-[18vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter text-white uppercase select-none drop-shadow-2xl">
            TASTER<br className="md:hidden" />HOOD.
          </h1>
          <div className="w-24 h-2 bg-orange-600 mx-auto mt-6 md:mt-8 mb-8 md:mb-12"></div>
        </div>
        
        {/* Subtitle / CTA */}
        <div className="flex flex-col items-center gap-8 animate-fade-in-up">
          <p className="text-gray-200 text-lg md:text-2xl font-bold uppercase tracking-widest max-w-lg drop-shadow-md px-4">
            Budapest legújabb <span className="text-orange-500">street food</span> állomása
          </p>
          
          <Link 
            href="/menu" 
            className="group relative px-8 py-4 bg-orange-600 text-white font-black uppercase tracking-widest overflow-hidden transition-all hover:bg-white hover:text-black"
          >
            <span className="relative z-10">Étlap Megtekintése</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></div>
          </Link>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50 hover:text-white transition-colors cursor-pointer">
        <ArrowDown size={32} />
      </div>

    </section>
  );
}
