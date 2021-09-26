import React, { useState } from 'react';
import { formatPrice } from '../utils';
import ProductOptions from './ProductOptions';

export default function ProductForm({ product }) {
  const allVariantsOptions = product?.variants?.edges?.map(variant => {
    const allOptions = {};
    variant.node.selectedOptions.map(item => {
      allOptions[item.name] = item.value;
    });
    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map(item => {
    defaultValues[item.name] = item.values[0];
  });
  const [selectedVariant, setSelectedVariant] = useState(allVariantsOptions);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  const setOptions = (name, value) => {
    setSelectedOptions(prevOptions => {
      return {
        ...prevOptions,
        [name]: value,
      };
    });
  };

  console.log(selectedOptions);
  return (
    <div className='rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3'>
      <h2 className='text-2xl font-bold'>{product.title}</h2>
      <span className='pb-6 font-semibold'>
        {formatPrice(product.variants.edges[0].node.priceV2.amount)}
      </span>
      {product.options.map(({ name, values }) => {
        return (
          <ProductOptions
            key={`key-${name}`}
            name={name}
            values={values}
            selectedOptions={selectedOptions}
            setOptions={setOptions}
          />
        );
      })}
      <button className='bg-green-700 rounded-lg text-white font-bold px-2 py-3 hover:bg-green-900'>
        Add To Cart
      </button>
    </div>
  );
}
