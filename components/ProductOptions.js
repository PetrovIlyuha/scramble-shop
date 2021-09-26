import React from 'react';

function ProductOptions({ name, values, selectedOptions, setOptions }) {
  return (
    <fieldset>
      <legend className='text-xl font-semibold'>{name}</legend>
      <div className='inline-flex items-center flex-wrap'>
        {values.map(value => {
          const id = `option-${name}-${value}`;
          const checked = selectedOptions[name] === value;
          return (
            <label htmlFor={id} key={id}>
              <input
                type='radio'
                id={id}
                name={`option-${name}`}
                value={value}
                checked={checked}
                className='sr-only'
                onChange={() => setOptions(name, value)}
              />
              <div
                className={`p-2 my-3 text-lg rounded-full block cursor-pointer mr-3 ${
                  checked
                    ? 'text-white bg-blue-900 shadow-lg'
                    : 'text-blue-900 bg-gray-100 shadow-md'
                }`}>
                <span className='px-2 font-semibold'>{value}</span>
              </div>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default ProductOptions;
