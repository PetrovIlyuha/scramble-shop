import React from 'react';

const footerNavigation = [
  { name: 'About', href: '#' },
  { name: 'Contacts', href: '#' },
  { name: 'User Policy', href: '#' },
];

export default function Footer() {
  return (
    <footer className='bg-green-200'>
      <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-4 lg:px-8'>
        <nav className='flex flex-wrap justify-center'>
          {footerNavigation.map((item, index) => (
            <div className='px-6 py-2' key={index}>
              <a href={item.href} className='text-gray-600 hover:text-gray-900'>
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className='mt-8 text-center text-gray-400'>
          FutureProof Store &copy; {new Date().getFullYear()}. All rights
          reserved
        </p>
      </div>
    </footer>
  );
}
