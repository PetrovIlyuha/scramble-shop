import React, { createContext, useContext, useState } from 'react';
import { createCheckout, updateCheckout } from '../lib/shopify';

const CartContext = createContext();

export default function ShopContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutId, setCheckoutId] = useState('');
  const [checkoutUrl, setCheckoutUrl] = useState('');

  const addToCart = async newItem => {
    if (cart.length) {
      let newCart = [...cart];
      cart.map(item => {
        if (item.id === newItem.id) {
          item.variantQuantity++;
          newCart = [...cart];
        } else {
          newCart = [...cart, newItem];
        }
      });
      setCart(newCart);
      const newCheckout = await updateCheckout(checkoutId, newCart);
      localStorage.setItem(
        'checkout_id',
        JSON.stringify([newCart, newCheckout]),
      );
    } else {
      setCart([newItem]);
      const checkout = await createCheckout(
        newItem.id,
        newItem.variantQuantity,
      );
      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);
      localStorage.setItem('checkout_id', JSON.stringify([newItem, checkout]));
    }
  };
  return (
    <CartContext.Provider
      value={{ addToCart, cart, cartOpen, setCartOpen, checkoutUrl }}>
      {children}
    </CartContext.Provider>
  );
}

const useShopContext = () => {
  return useContext(CartContext);
};

export { ShopContextProvider, useShopContext };
