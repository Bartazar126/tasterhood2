"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface MenuOption {
  name: string;
  price?: number;
}

export interface MenuItem {
  id: number;
  category: string;
  name: string;
  price: string;
  description: string;
  image: string;
  options?: MenuOption[];
}

export interface CartItem {
  id: string;
  menuItem: MenuItem;
  selectedOptions: string[];
  totalPrice: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, options: string[]) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('tasterhood-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from localStorage', e);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('tasterhood-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: MenuItem, options: string[]) => {
    // Parse base price
    const basePrice = parseInt(item.price.replace(/\D/g, ''));
    
    // Calculate options price
    let optionsPrice = 0;
    if (item.options) {
      options.forEach(optName => {
        const opt = item.options?.find(o => o.name === optName);
        if (opt && opt.price) optionsPrice += opt.price;
      });
    }

    const totalPrice = basePrice + optionsPrice;
    const uniqueId = `${item.id}-${options.sort().join('-')}`;

    setCart(prev => {
      const existing = prev.find(i => i.id === uniqueId);
      if (existing) {
        return prev.map(i => i.id === uniqueId ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { 
        id: uniqueId, 
        menuItem: item, 
        selectedOptions: options, 
        totalPrice, 
        quantity: 1 
      }];
    });
    
    // Open cart automatically when adding item (optional, good UX)
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      clearCart, 
      cartCount, 
      cartTotal,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
