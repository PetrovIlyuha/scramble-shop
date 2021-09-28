import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useShopContext } from '../context/ShopContext';
import { ShoppingBagIcon } from '@heroicons/react/outline';
import SlidingRightSideShoppingCart from './SlidingRightSideShoppingCart';

export default function Navigation() {
  const { cart, cartOpen, setCartOpen } = useShopContext();
  const [totalProductsInCart, setTotalProductsInCart] = useState(0);

  useEffect(() => {
    let newQty = calculateCartQty(cart);
    setTotalProductsInCart(newQty);
  }, [cart]);

  function calculateCartQty(cart) {
    return cart.reduce((total, item) => (total += item?.variantQuantity), 0);
  }
  return (
    <header className='border-b sticky top-0 z-20 bg-white'>
      <div className='flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl'>
        <Link href={`/`} passHref>
          <a className='cursor-pointer flex flex-row items-center w-48 justify-between'>
            <ShoppingBagIcon
              className='h-8 w-8 bg-gray-900 rounded text-yellow-400'
              aria-hidden='true'
            />
            <span className='text-lg pt-1 font-bold'>FutureProof Store</span>
          </a>
        </Link>
        <a
          onClick={() => setCartOpen(!cartOpen)}
          className='cursor-pointer text-md font-bold'>
          Cart ({totalProductsInCart}){' '}
        </a>
        <SlidingRightSideShoppingCart />
      </div>
    </header>
  );
}
