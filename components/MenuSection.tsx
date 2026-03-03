"use client";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuredItems = [
  { 
    id: 1, 
    name: 'Klasszikus Gyros Tál', 
    price: '2 490 Ft', 
    image: 'https://cdn.mindmegette.hu/2024/04/6NCazUeM1T6dEOWFcV5ziku5mK30yLngDJI9u81iEYk/fill/0/0/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50LzdmMWVlMjNlZTExYTQ1MzFhMTMxNzA2ODE3NGEyZWE1.webp' 
  },
  { 
    id: 7, 
    name: 'Tasterhood Burger', 
    price: '3 290 Ft', 
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    name: 'Pizza Margherita', 
    price: '2 190 Ft', 
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1769&auto=format&fit=crop' 
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-white border-b border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            Kiemelt Ajánlatok.
          </h2>
          
          <Link 
            href="/menu" 
            className="group flex items-center gap-4 text-xl font-bold uppercase tracking-widest hover:text-orange-600 transition-colors"
          >
            Teljes Étlap
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Link href="/menu" key={item.id} className="group cursor-pointer block">
              <div className="relative aspect-3/4 overflow-hidden bg-gray-100 mb-6 border border-black group-hover:border-orange-600 transition-colors">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              <div className="flex justify-between items-baseline border-b-2 border-transparent group-hover:border-black pb-2 transition-colors">
                <h3 className="text-2xl font-black tracking-tight uppercase group-hover:text-orange-600 transition-colors">{item.name}</h3>
                <span className="font-mono text-lg font-bold">{item.price}</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
