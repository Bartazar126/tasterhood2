"use client";
import { ShoppingBag, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, cartTotal, removeFromCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
      <div className="fixed inset-y-0 right-0 z-[60] w-full max-w-md bg-white border-l border-black shadow-2xl flex flex-col animate-slide-in-right">
        <div className="p-6 border-b border-black flex justify-between items-center bg-black text-white">
          <div className="flex items-center gap-3">
            <ShoppingBag size={24} />
            <h2 className="text-2xl font-black uppercase tracking-widest">Kosár</h2>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="hover:text-orange-500 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-10 text-gray-400">
              <p className="font-bold uppercase tracking-widest">A kosarad üres</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-start border-b border-gray-100 pb-4">
                <div>
                  <h4 className="font-black uppercase tracking-tight text-lg">{item.menuItem.name}</h4>
                  {item.selectedOptions.length > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      + {item.selectedOptions.join(', ')}
                    </p>
                  )}
                  <p className="text-xs font-bold text-orange-600 mt-2">
                    {item.quantity} x {item.totalPrice.toLocaleString()} Ft
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="font-mono font-bold">{(item.totalPrice * item.quantity).toLocaleString()} Ft</span>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-gray-400 hover:text-red-500 underline"
                  >
                    Törlés
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-black bg-gray-50">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-bold uppercase tracking-widest text-gray-500">Összesen</span>
            <span className="text-3xl font-black font-mono">{cartTotal.toLocaleString()} Ft</span>
          </div>
          <button className="w-full bg-black text-white font-black uppercase tracking-widest py-4 hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={cart.length === 0}>
            Fizetés
          </button>
        </div>
      </div>
    </>
  );
}
