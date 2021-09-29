import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '../utils';

const RecommendedProductCard = ({ product }) => {
  const { handle, title } = product.node;
  const { originalSrc, altText } = product.node.images.edges[0].node;
  const { amount: price } = product.node.priceRange.minVariantPrice;
  return (
    <Link href={`/products/${handle}`}>
      <a className='group'>
        <div className='w-full bg-gray-200 rounded-3xl overflow-hidden'>
          <div className='relative group-hover:opacity-75 h-72 w-full'>
            <Image
              src={originalSrc}
              alt={altText}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
        <h3 className='mt-4 text-lg font-medium text-gray-900'>{title}</h3>
        <p className='mt-1 text-sm font-medium text-gray-700'>
          {formatPrice(price)}
        </p>
      </a>
    </Link>
  );
};

export default RecommendedProductCard;
