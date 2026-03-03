import { Truck, ExternalLink } from 'lucide-react';

export default function DeliverySection() {
  return (
    <section id="delivery" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-24 text-center md:text-left">
          Delivery.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Direct - The "Black" Card */}
          <div className="bg-[#111] border border-white/10 p-10 flex flex-col justify-between min-h-[500px] hover:border-orange-600 transition-colors group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
              <Truck size={48} className="text-orange-600" />
            </div>
            <div>
              <h3 className="text-4xl font-black uppercase mb-4">Saját <br/> Futár</h3>
              <p className="text-gray-500 font-medium max-w-xs">
                A leggyorsabb út. Rendelj közvetlenül tőlünk kedvezőbb áron.
              </p>
            </div>
            <button className="w-full py-4 bg-orange-600 text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all mt-8">
              Rendelés Most
            </button>
          </div>

          {/* Wolt - The "Blue" Card */}
          <div className="bg-[#00c2e8] text-white p-10 flex flex-col justify-between min-h-[500px] hover:bg-[#00a0c0] transition-colors group">
            <div className="absolute top-0 right-0 p-6">
              <span className="font-black text-2xl opacity-50">W</span>
            </div>
            <div>
              <h3 className="text-4xl font-black uppercase mb-4">Wolt</h3>
              <p className="text-white/80 font-medium max-w-xs">
                Keresd a Tasterhood-ot a Wolt alkalmazásban is.
              </p>
            </div>
            <button className="w-full py-4 bg-white text-[#00c2e8] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all mt-8 flex items-center justify-center gap-2">
              Megnyitás <ExternalLink size={18} />
            </button>
          </div>

          {/* Foodora - The "Pink" Card */}
          <div className="bg-[#d70f64] text-white p-10 flex flex-col justify-between min-h-[500px] hover:bg-[#b00c50] transition-colors group">
            <div className="absolute top-0 right-0 p-6">
              <span className="font-black text-2xl opacity-50">F</span>
            </div>
            <div>
              <h3 className="text-4xl font-black uppercase mb-4">Foodora</h3>
              <p className="text-white/80 font-medium max-w-xs">
                Rendelj kényelmesen a Foodora rendszerén keresztül.
              </p>
            </div>
            <button className="w-full py-4 bg-white text-[#d70f64] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all mt-8 flex items-center justify-center gap-2">
              Megnyitás <ExternalLink size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
