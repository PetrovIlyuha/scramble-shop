import React from 'react';
import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
