import React, { createContext, useContext, useEffect, useState } from 'react';
import { createCheckout, updateCheckout } from '../lib/shopify';

const CHECKOUT_ID = 'checkout_id';

const CartContext = createContext();

export default function ShopContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutId, setCheckoutId] = useState('');
  const [checkoutUrl, setCheckoutUrl] = useState('');

  useEffect(() => {
    if (localStorage.getItem(CHECKOUT_ID)) {
      const cartObject = JSON.parse(localStorage.getItem(CHECKOUT_ID));
      if (cartObject[0].id) {
        setCart([cartObject[0]]);
      } else if (cartObject[0].length > 0) {
        setCart(...[cartObject[0]]);
      }
      setCheckoutId(cartObject[1].id);
      setCheckoutUrl(cartObject[1].webUrl);
    }
  }, []);

  const addToCart = async newItem => {
    setCartOpen(true);
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
      localStorage.setItem(CHECKOUT_ID, JSON.stringify([newCart, newCheckout]));
    } else {
      setCart([newItem]);
      const checkout = await createCheckout(
        newItem.id,
        newItem.variantQuantity,
      );
      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);
      localStorage.setItem(CHECKOUT_ID, JSON.stringify([newItem, checkout]));
    }
  };

  const removeCartItem = async itemToRemove => {
    if (cart.length === 1) {
      setCartOpen(false);
    }
    const updatedCart = cart.filter(item => item.id !== itemToRemove.id);
    setCart(updatedCart);
    const newCheckout = await updateCheckout(checkoutId, updatedCart);
    localStorage.setItem(
      CHECKOUT_ID,
      JSON.stringify([updatedCart, newCheckout]),
    );
  };
  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        cartOpen,
        setCartOpen,
        checkoutUrl,
        removeCartItem,
      }}>
      {children}
    </CartContext.Provider>
  );
}

const useShopContext = () => {
  return useContext(CartContext);
};

export { ShopContextProvider, useShopContext };
