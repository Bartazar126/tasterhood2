import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import DeliverySection from "@/components/DeliverySection";
import { ArrowUp, Clock, Utensils, Star, ChefHat } from "lucide-react";

export default function Home() {
  return (
    <div className="relative bg-white">
      <Hero />
      <MenuSection />
      <DeliverySection />
      
      {/* About / Info Section - Clean & Modern */}
      <section id="about" className="py-24 bg-[#f9f9f9] relative overflow-hidden">
        
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left: Text Content */}
            <div className="lg:w-1/2 space-y-8">
              <span className="text-orange-600 font-bold uppercase text-xs tracking-widest bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                TÖRTÉNETÜNK
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                RÓLUNK <br/>
                <span className="text-orange-600">SABLON</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  "Ide jön a részletes bemutatkozó szöveg. Sablon szöveg helye, ami leírja a cég történetét, filozófiáját és céljait."
                </p>
                <p>
                  "Második bekezdés sablon szövege. Itt lehet részletezni a minőséget, az alapanyagokat vagy a csapatot."
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                   <div className="bg-orange-50 p-3 rounded-xl text-orange-600">
                     <Utensils size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-1">ALAPANYAGOK</h4>
                     <p className="text-sm text-gray-500">"Rövid leírás."</p>
                   </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                   <div className="bg-orange-50 p-3 rounded-xl text-orange-600">
                     <ChefHat size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-1">SZAKÉRTELEM</h4>
                     <p className="text-sm text-gray-500">"Rövid leírás."</p>
                   </div>
                 </div>
              </div>
            </div>

            {/* Right: Opening Hours Card */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-10 -mt-10 z-0"></div>
                 
                 <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-200">
                       <Clock size={24} />
                     </div>
                     <h3 className="font-serif text-2xl font-bold text-gray-900">NYITVATARTÁS</h3>
                   </div>
                   
                   <ul className="space-y-4">
                     <li className="flex justify-between items-center py-3 border-b border-gray-50">
                       <span className="font-bold text-gray-500 text-sm tracking-wide">HÉTFŐ - CSÜTÖRTÖK</span>
                       <span className="font-bold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg">08:00 - 22:00</span>
                     </li>
                     <li className="flex justify-between items-center py-3 border-b border-gray-50">
                       <span className="font-bold text-gray-500 text-sm tracking-wide">PÉNTEK - SZOMBAT</span>
                       <span className="font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-lg">08:00 - 23:00</span>
                     </li>
                     <li className="flex justify-between items-center py-3 border-b border-gray-50">
                       <span className="font-bold text-gray-500 text-sm tracking-wide">VASÁRNAP</span>
                       <span className="font-bold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg">09:00 - 21:00</span>
                     </li>
                   </ul>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <a href="#" className="fixed bottom-8 right-8 bg-white text-gray-900 p-3 rounded-full shadow-lg border border-gray-100 hover:-translate-y-1 transition-all z-40 hidden md:flex items-center justify-center group hover:text-orange-600">
        <ArrowUp size={20} />
      </a>
    </div>
  );
}
