import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='my-32 mx-auto max-w-7xl px-14 py-12 sm:mt-44 sm:mx-12 md:mt-60 text-center bg_sliding rounded shadow-2xl'>
      <h1 className='font-extrabold text-gray-900'>
        <p className='text-xl sm:text-3xl md:text-4xl text-green-300'>
          FutureProof Store
        </p>
        <p className='text-transparent bg-clip-text bg-gradient-to-r from-white to-black text-3xl sm:text-6xl md:text-7xl'>
          Get Your NFTs all in One place
        </p>
      </h1>
      <h2 className='mt-3 max-w-md mx-auto text-white sm:text-lg md:mt-5 md:text-xl md:max-x-3xl font-extrabold'>
        Building the eCommerce Revolution
      </h2>
    </div>
  );
};

export default Hero;
