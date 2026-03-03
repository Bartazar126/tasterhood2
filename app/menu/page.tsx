"use client";
import Image from 'next/image';
import { Plus, ArrowLeft, Search, ShoppingBag, X, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useCart, MenuItem } from '@/context/CartContext';

const categories = [
  { id: 'all', name: 'ALL' },
  { id: 'gyros', name: 'GYROS' },
  { id: 'pizza', name: 'PIZZA' },
  { id: 'langos', name: 'LÁNGOS' },
  { id: 'burger', name: 'BURGER' },
  { id: 'hotdog', name: 'HOTDOG' },
  { id: 'pancake', name: 'SWEET' },
  { id: 'breakfast', name: 'BREAKFAST' },
];

const menuItems: MenuItem[] = [
  // Gyros
  { 
    id: 1, 
    category: 'gyros', 
    name: 'Klasszikus Gyros Tál', 
    price: '2 490 Ft', 
    description: 'Csirkehús, hasábburgonya, friss saláta, tzatziki, pita.', 
    image: 'https://cdn.mindmegette.hu/2024/04/6NCazUeM1T6dEOWFcV5ziku5mK30yLngDJI9u81iEYk/fill/0/0/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50LzdmMWVlMjNlZTExYTQ1MzFhMTMxNzA2ODE3NGEyZWE1.webp' 
  },
  { 
    id: 2, 
    category: 'gyros', 
    name: 'Gyros Pita', 
    price: '1 690 Ft', 
    description: 'Pitában, sok zöldséggel és öntettel.', 
    image: 'https://thegreekfoodie.com/wp-content/uploads/2025/02/Chicken_Gyros_SQ.jpg' 
  },
  
  // Pizza
  { id: 3, category: 'pizza', name: 'Pizza Margherita', price: '2 190 Ft', description: 'Paradicsomszósz, mozzarella, bazsalikom.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1769&auto=format&fit=crop' },
  { id: 4, category: 'pizza', name: 'Sonkás-Kukoricás', price: '2 490 Ft', description: 'Paradicsomszósz, sajt, sonka, csemegekukorica.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop' },
  
  // Lángos
  { 
    id: 5, 
    category: 'langos', 
    name: 'Sajtos-Tejfölös', 
    price: '1 490 Ft', 
    description: 'A klasszikus kedvenc. Bő fokhagymával ajánljuk!', 
    image: 'https://cdn.falatozz.hu/kepek/receptek/000/123/400x/sajtos-tejfolos-langos.jpg' 
  },
  { 
    id: 6, 
    category: 'langos', 
    name: 'Töltött Lángos', 
    price: '1 890 Ft', 
    description: 'Sonkával és sajttal töltött lángos.', 
    image: 'https://cdn.mindmegette.hu/2024/04/ZR53pOGchyIyp0x08YeEAm5NXhmWs7oVwwg6rgEX3ao/fill/0/0/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50LzE3ZTFjZGQ0NWY0NzRlOGRiZmI1Mzg2ODNhZmFhNWI4.webp' 
  },
  
  // Burger
  { id: 7, category: 'burger', name: 'Tasterhood Burger', price: '3 290 Ft', description: 'Marhahús, cheddar, bacon, saláta, paradicsom, házi szósz.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop' },
  
  // Hotdog
  { 
    id: 8, 
    category: 'hotdog', 
    name: 'New York Hot-Dog', 
    price: '1 290 Ft', 
    description: 'Roppanós virsli, pirított hagyma, mustár, ketchup.', 
    image: 'https://www.cottagedelight.co.uk/wp-content/uploads/2022/04/New-York-Style-Hotdog-hickory-Sticky-Balsamic-Onions-1-1.jpg' 
  },
  { id: 9, category: 'hotdog', name: 'Chili Dog', price: '1 490 Ft', description: 'Jalapeno paprika, csípős szósz, sajt.', image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2080&auto=format&fit=crop' },
  
  // Pancake
  { id: 10, category: 'pancake', name: 'Nutellás Palacsinta', price: '390 Ft', description: 'Klasszikus, mogyorókrémes töltelékkel.', image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1974&auto=format&fit=crop' },
  
  // Breakfast
  { 
    id: 11, 
    category: 'breakfast', 
    name: 'Rántotta Variációk', 
    price: '1 490 Ft', 
    description: '3 tojásból, választható feltéttel.', 
    image: 'https://cdn.mindmegette.hu/2024/04/BKXfCB5ed1GLaB-idSRsMfGF51VGACGNCSjar-OA_bk/fill/1347/758/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50LzJiZDdhMmVlYTJhNTQ4YmQ5ODMxZjJjMTA2YzQxNmIz.webp',
    options: [
      { name: 'Hagyma', price: 0 },
      { name: 'Bacon', price: 300 },
      { name: 'Kolbász', price: 300 },
      { name: 'Sajt', price: 250 },
      { name: 'Gomba', price: 200 }
    ]
  },
  { id: 12, category: 'breakfast', name: 'Sajtos-Sonkás Tortilla', price: '1 690 Ft', description: 'Grillezett tortilla, olvadós sajttal és sonkával.', image: 'https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&w=2070&auto=format&fit=crop' },
  { id: 13, category: 'breakfast', name: 'Melegszendvics', price: '990 Ft', description: 'Nagy szelet kenyér, sonka, sajt, gomba, kukorica.', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1773&auto=format&fit=crop' },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Use global cart context
  const { addToCart, cartCount, isCartOpen, setIsCartOpen } = useCart();
  
  // Selection Modal State
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCartClick = (item: MenuItem) => {
    if (item.options && item.options.length > 0) {
      setSelectedItem(item);
      setSelectedOptions([]);
    } else {
      addToCart(item, []);
    }
  };

  const handleModalAddToCart = () => {
    if (selectedItem) {
      addToCart(selectedItem, selectedOptions);
      setSelectedItem(null);
      setSelectedOptions([]);
    }
  };

  const toggleOption = (optionName: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionName) 
        ? prev.filter(o => o !== optionName) 
        : [...prev, optionName]
    );
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-black">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black text-white hover:bg-orange-600 transition-colors">
                  <ArrowLeft size={20} />
                </Link>
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Menu</h1>
              </div>
              
              {/* Mobile Cart Button */}
              <button 
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="md:hidden relative flex items-center justify-center w-10 h-10 bg-orange-600 text-white"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Categories */}
            <div className="flex gap-2 md:gap-4 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0 mask-image-gradient">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-xs md:text-base font-bold uppercase tracking-widest px-3 py-2 md:px-4 border-2 transition-all whitespace-nowrap ${
                    activeCategory === cat.id
                      ? 'bg-black text-white border-black'
                      : 'bg-transparent text-gray-400 border-transparent hover:text-black hover:border-black'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Desktop Cart Button */}
            <button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="hidden md:flex relative items-center justify-center w-12 h-12 bg-black text-white hover:bg-orange-600 transition-colors"
            >
              <ShoppingBag size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-orange-600 text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>

          </div>
          
          {/* Search */}
          <div className="mt-4 relative">
             <input 
              type="text" 
              placeholder="KERESÉS..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 border-none p-3 md:p-4 text-base md:text-xl font-bold uppercase tracking-wide placeholder-gray-400 focus:ring-2 focus:ring-black outline-none transition-all"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>

        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="group flex flex-col h-full">
              
              <div className="relative aspect-4/3 md:aspect-4/5 overflow-hidden bg-gray-100 mb-4 border border-black group-hover:border-orange-600 transition-colors">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <button 
                  onClick={() => handleAddToCartClick(item)}
                  className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-black text-white flex items-center justify-center hover:bg-orange-600 transition-colors z-10 active:scale-95"
                >
                    <Plus size={24} className="md:w-8 md:h-8" />
                </button>
              </div>
              
              <div className="flex flex-col grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-none max-w-[70%] group-hover:text-orange-600 transition-colors">{item.name}</h3>
                  <span className="text-lg md:text-xl font-mono font-bold whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-gray-500 font-medium text-xs md:text-sm leading-tight">{item.description}</p>
              </div>

            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl md:text-2xl font-black uppercase text-gray-300">Nincs találat.</h3>
          </div>
        )}

      </div>

      {/* Options Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-md max-h-[90vh] overflow-y-auto border-2 border-orange-600 shadow-2xl animate-scale-up">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-black uppercase tracking-tight">{selectedItem.name}</h2>
                <button onClick={() => setSelectedItem(null)} className="text-gray-400 hover:text-black">
                  <X size={24} />
                </button>
              </div>
              
              <p className="text-gray-500 mb-6 text-sm">{selectedItem.description}</p>
              
              <div className="space-y-3 mb-8">
                <h3 className="font-bold uppercase text-sm tracking-widest text-orange-600 mb-2">Válassz feltétet:</h3>
                {selectedItem.options?.map((opt) => (
                  <div 
                    key={opt.name}
                    onClick={() => toggleOption(opt.name)}
                    className={`flex justify-between items-center p-3 border-2 cursor-pointer transition-all ${
                      selectedOptions.includes(opt.name) 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <span className="font-bold uppercase text-sm">{opt.name}</span>
                    <div className="flex items-center gap-3">
                      {opt.price && opt.price > 0 && <span className="font-mono text-xs opacity-60">+{opt.price} Ft</span>}
                      {selectedOptions.includes(opt.name) && <Check size={16} />}
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={handleModalAddToCart}
                className="w-full bg-orange-600 text-white font-black uppercase tracking-widest py-4 hover:bg-black transition-colors"
              >
                Hozzáadás a kosárhoz
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer is now global in Providers.tsx */}

    </div>
  );
}
