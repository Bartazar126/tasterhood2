"use client";
import Link from 'next/link';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, isCartOpen, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide Navbar on /menu page as it has its own header
  if (pathname === '/menu') return null;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-4 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="z-50 group relative">
            <span className={`font-black text-2xl tracking-tighter uppercase ${isScrolled ? 'text-black' : 'text-white'} transition-colors duration-500`}>
              Tasterhood
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-12 font-bold text-sm tracking-widest ${isScrolled ? 'text-black' : 'text-white'} transition-colors duration-500`}>
            <Link href="/menu" className="hover:text-orange-600 transition-colors">ÉTLAP</Link>
            <Link href="#delivery" className="hover:text-orange-600 transition-colors">KISZÁLLÍTÁS</Link>
            <Link href="#about" className="hover:text-orange-600 transition-colors">RÓLUNK</Link>
          </div>

          {/* Right Actions */}
          <div className={`flex items-center gap-6 z-50 ${isScrolled ? 'text-black' : 'text-white'} transition-colors duration-500`}>
            <button 
              className="relative group hover:text-orange-600 transition-colors"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <ShoppingBag size={22} strokeWidth={2} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-orange-600 text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button className="md:hidden hover:text-orange-600 transition-colors" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col gap-10 text-center">
          <Link href="/menu" onClick={() => setIsOpen(false)} className="text-5xl font-black uppercase tracking-tighter text-white hover:text-orange-600 transition-colors">Étlap</Link>
          <Link href="#delivery" onClick={() => setIsOpen(false)} className="text-5xl font-black uppercase tracking-tighter text-white hover:text-orange-600 transition-colors">Kiszállítás</Link>
          <Link href="#about" onClick={() => setIsOpen(false)} className="text-5xl font-black uppercase tracking-tighter text-white hover:text-orange-600 transition-colors">Rólunk</Link>
        </div>
      </div>
    </>
  );
}
