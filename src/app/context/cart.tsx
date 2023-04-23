"use client";

import { createContext, useContext, useState } from "react";

interface CartContextProps {
  itemsInCart: CartItemType[];
  setItemsInCart: React.Dispatch<React.SetStateAction<CartItemType[]>>;
}

const defaultValue = {
  itemsInCart: [],
  setItemsInCart: () => {},
};

const CartContext = createContext<CartContextProps>(defaultValue);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [itemsInCart, setItemsInCart] = useState<CartItemType[]>([]);

  return (
    <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
