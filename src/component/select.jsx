import React from 'react';

const Select = ({
  id,
  name,
  selectStyle,
  isError,
  textError,
  value,
  children,
  ...props
}) => {
  return (
    <div className="w-full">
      <select
        {...props}
        name={name}
        value={value}
        id={id}
        className={`${selectStyle} focus:outline-none poppins transition-all ease-in-out rounded-lg bg-transparent border border-pink-900 text-black text-center w-80 p-2`}
      >
        {children}
      </select>
      {isError && <p className="text-red-500 italic">{textError}</p>}
    </div>
  );
};


export default Select;