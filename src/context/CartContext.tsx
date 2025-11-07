// Este arquivo vai gerenciar o estado do nosso carrinho
import React, { createContext, useState, useContext, ReactNode } from 'react';

// 1. Definição dos Tipos (TypeScript)
// O que é um item do carrinho?
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// O que o nosso Contexto vai fornecer?
interface ICartContext {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

// 2. Criação do Contexto
const CartContext = createContext<ICartContext | undefined>(undefined);

// 3. Criação do "Provedor" (Componente que vai envolver nosso App)
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Função para adicionar ao carrinho (ou aumentar a quantidade)
  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        // Se já existe, só aumenta a quantidade
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // Se é novo, adiciona com quantidade 1
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Função para remover do carrinho
  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(i => i.id !== id));
  };

  // Função para atualizar quantidade (usada no carrinho)
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(prevItems =>
        prevItems.map(i => (i.id === id ? { ...i, quantity } : i))
      );
    }
  };

  // Função para limpar o carrinho (após a compra)
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 4. Hook customizado (para facilitar o uso)
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};
